const User = require('../model/userModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const Email = require('../utils/email');
const { promisify } = require('util');
const crypto = require('crypto');
// eslint-disable-next-line import/no-extraneous-dependencies
const { verify, sign } = require('jsonwebtoken');

const signToken = (id) =>
  sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY,
  });

//refactored fn that sends res with cookie
const createSendToken = (user, res, status) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRY * 24 * 60 * 60 * 1000,
    ),
    secure: true,
    httpOnly: true,
    sameSite: 'none',
  };
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  //ACTUALLY SENDING COOKIE VIA RES
  res.cookie('jwt', token, cookieOptions);
  res.status(status).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};
//when users signup
exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  await new Email(
    user,
    `${req.protocol}://${req.get('host')}/me`,
  ).sendWelcome();
  createSendToken(user, res, 201);
});

//when users login
exports.login = catchAsync(async (req, res, next) => {
  //step 1 basic checks
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError('Invalid email or password entered', 401));

  //step 2 check if email or password is valid
  const user = await User.findOne({ email }).select('+password');
  const isCorrect = await user?.checkPassword(user.password, password);
  if (!user || !isCorrect)
    return next(new AppError('Wrong email or password', 401));

  createSendToken(user, res, 200);
});

//simple logout by the cookie removal by custom
exports.logout = catchAsync(async (req, res, next) => {
  res.cookie('jwt', '', { maxAge: 10 * 1000 });
  res.status(200).json({
    status: 'success',
  });
});

//protecting tour route
exports.protect = catchAsync(async (req, res, next) => {
  //step 1 check if there is token in header
  let token;
  if (!req.cookies?.jwt) token = req.headers?.authorization?.split(' ')[1];
  else token = req.cookies.jwt;

  if (!token)
    return next(new AppError('You have not logged in Please log in again!'));

  //step 2 check if token is expired or good
  const tokenStatus = await promisify(verify)(token, process.env.JWT_SECRET);
  //has object of payload, iat, exp

  //step 3 check if the user associated with token is still available
  const user = await User.findById({ _id: tokenStatus.id });
  if (!user)
    return next(
      new AppError('The user associated with this token is unavaible!', 401),
    );

  //step 4 check if the password was changed since token was issued
  const isJwtValid = await user.checkDateJwt(tokenStatus.iat);
  if (!isJwtValid)
    return next(
      new AppError('password has been changed since you logged in previously!'),
    );
  //step 5 return the all tours
  req.user = user;
  res.locals.user = user;
  req.jwtObjToken = tokenStatus;
  next();
});

//IS LOGGED IN METHOD
exports.isLoggedIn = async (req, res, next) => {
  try {
    //step 1 check if there is token
    const token = req.cookies.jwt;
    if (!token) return next();
    //step 2 check if token is expired or good
    const tokenStatus = await promisify(verify)(token, process.env.JWT_SECRET);
    //has object of payload, iat, exp

    //step 3 check if the user associated with token is still available
    const user = await User.findById({ _id: tokenStatus.id });
    if (!user) return next();

    //step 4 check if the password was changed since token was issued
    const isJwtValid = await user.checkDateJwt(tokenStatus.iat);
    if (!isJwtValid) return next();
    //step 5 return the all tours
    //send to the
    res.locals.user = user;
    req.jwtObjToken = tokenStatus;
    next();
  } catch (err) {
    clc('error occured' + err);
  }
};

//this controller method middleware just prevents normal users to do any sort of the action
exports.protectedAccess =
  (...authorizedPersons) =>
  (req, res, next) => {
    if (!authorizedPersons.map((val) => val === req.user.role).includes(true))
      return next(
        new AppError('User is not authorized to access this route', 401),
      );
    next();
  };

//user forgetting password scenario
exports.forgotPassword = async (req, res, next) => {
  //to verify if this user exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(new AppError('The user is not available', 400));

  try {
    const token = user.generateToken();
    user.save({ validateBeforeSave: false });

    const url = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${token}`;
    await new Email(user, url).sendPasswordReset(
      'forgotPassword',
      ' This is the password reset link click this to reset your password for your Natours user account that is valid for 10 minutes.',
    );

    res.status(200).json({
      status: 'success',
      token,
      user,
    });
  } catch (err) {
    //major fallbacks to be handled carefully so we dont leak token of reset password
    user.passwordResetToken = undefined; //upon failed forgot pwd we hide this field
    user.passwordResetTimeout = undefined; // same..
    await user.save({ validateBeforeSave: false }); // just to save entire doc without validating
    return next(
      new AppError('some problem occured resetting your password', 500),
    );
  }
};

//export password
exports.resetPassword = catchAsync(async (req, res, next) => {
  //to check if the token of reset pwd is valid and if the token is available or not
  const token = req.params.token;
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetTimeout: { $gt: Date.now() },
  });
  if (!user)
    return next(
      new AppError(`can't reset password token is invalid or expired`),
    );
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.changedPasswordAt();
  user.passwordResetToken = undefined;
  user.passwordResetTimeout = undefined;
  await user.save({ validateModifiedOnly: true });

  createSendToken(user, res, 200);
});

//updating the existing user password who is logged in
exports.updatePassword = catchAsync(async (req, res, next) => {
  //get user from collection
  const userId = req.jwtObjToken.id; //got that from protect route
  const user = await User.findById(userId).select('+password');

  //check if posted current password is correct
  const previousPassword = req.body.previousPassword;
  const PasswordMatched = await user.checkPassword(
    user.password,
    previousPassword,
  );

  if (!PasswordMatched)
    return next(new AppError('Your previous password dont match', 401));

  //if so update pwd
  user.passwordConfirm = req.body.passwordConfirm;
  user.password = req.body.password;
  user.changedPasswordAt(); //i reduced this to 2 second before because it happens before save and if it is changed before saved and token is issued it says out password is changed though we dont have any mistake
  await user.save();
  createSendToken(user, res, 200);
});

//still works so amazingly
