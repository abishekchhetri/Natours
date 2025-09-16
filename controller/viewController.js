const { findByIdAndUpdate } = require('../model/reviewModel');
const Tour = require('../model/tourModel');
const User = require('../model/userModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.overview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();
  res.status(200).render('overview', {
    title: 'overview',
    tours,
  });
});

exports.viewTours = catchAsync(async (req, res, next) => {
  const tour = await Tour.find({ slugify: req.params.tour }).populate({
    path: 'reviews',
  });

  if (tour.length < 1) return next(new AppError('Cannot find such tour', 403));

  const title = tour[0].slugify;
  res.status(200).render('tours', {
    title,
    tour: tour[0],
  });
});

exports.login = catchAsync(async (req, res, next) => {
  res.status(200).render('login', {
    title: 'login',
  });
});

exports.logout = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
  });
});

exports.getAccount = catchAsync(async (req, res, next) => {
  res.status(200).render('aboutMe', {
    title: 'me',
  });
});

exports.getTourOfUser = catchAsync(async (req, res, next) => {
  //child refrencing from user to booking so we can get all the booking associated with user
  const bookingOfUser = await User.findById(req.user.id).populate('booking');

  //getting tour from the booking user actually way clever
  const tours = bookingOfUser.booking.map((val) => val.tour);
  if (tours.length < 1)
    return next(new AppError('You have not bought any tours yet!'));
  res.status(200).render('overview', {
    title: 'my tours',
    tours,
  });
});
//this is also the traditional way of getting things done by post method in a form
// exports.changeUserInfo = catchAsync(async (req, res, next) => {
//   const user = await User.findByIdAndUpdate(
//     req.user.id,
//     { name: req.body.name, email: req.body.email },
//     { new: true, runValidators: true },
//   );
//   res.locals.user = user;
//   res.status(200).render('aboutMe', {
//     title: 'me',
//   });
// });
