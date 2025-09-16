const multer = require('multer');
const sharp = require('sharp');
const User = require('../model/userModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');
const factory = require('../controller/factoryController');

//sharp options

//multer options

//using the actual server storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/img/users');
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = `user-${Date.now()}-${req.user.id}.jpeg`;
//     cb(null, uniqueSuffix);
//   },
// });

//using browser app memory for storage
const storage = multer.memoryStorage();
const fileFilter = function (req, file, cb) {
  if (file.mimetype.startsWith('image')) cb(null, true);
  else
    cb(new AppError('Your can only upload images but not other files!', false));
};

const upload = multer({ storage, fileFilter });

//this is middleware for photos
exports.uploadPhotos = upload.single('photo');

//after buffering img from upload photos we just need to resize them
exports.resizeImage = catchAsync(async (req, res, next) => {
  req.file.filename = `user-${Date.now()}-${req.user.id}.jpeg`;
  await sharp(req.file.buffer)
    .resize(200, 200)
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);
  next();
});

//for the update me it just sanitizes our data and make it pretty safe to proceed since every user can be admin
const filteredBody = (body, ...fields) => {
  const filtered = {};
  Object.keys(body).forEach((val) => {
    if (fields.includes(val)) filtered[val] = body[val];
  });
  return filtered;
};
//user specific update limited
exports.updateMe = catchAsync(async (req, res, next) => {
  //firstly this must be authorized for token
  //we want user to only update their email and the username

  const filtered = filteredBody(req.body, 'name', 'email');
  if (req.file) filtered.photo = req.file.filename;
  if (Object.entries(filtered).length < 1)
    return next(
      new AppError('Invalid details or illegal fields for updating data'),
    );

  const user = await User.findByIdAndUpdate(req.user.id, filtered, {
    new: true,
    runValidators: true,
  });
  if (!user) return next(new AppError('cannot find user to update!'));
  res.status(201).json({
    status: 'success',
    user: {
      user,
    },
  });
});

//user specific just deletion
exports.deleteMe = catchAsync(async (req, res, next) => {
  //disabling the id actually
  const user = await User.findById(req.user.id);
  if (!user) return next(new AppError('Cannot find the user with that id!'));

  user.active = false;
  await user.save({ validateBeforeSave: false });
  res.status(204).json({});
});

//middleware for myDetails
exports.putUser = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

//factory for all requests
exports.getAllUsers = factory.getAll(User);
exports.findUser = factory.getOne(User);
exports.updateUser = factory.updateOne(User); //direct updating
exports.deleteUser = factory.deleteOne(User); //direct deletion
exports.myDetails = factory.getOne(User);
