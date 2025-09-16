const Review = require('../model/reviewModel');
const factory = require('./factoryController');

exports.addUserId = (req, res, next) => {
  if (req.body?.tour) req.body.tour = req.body.tour;
  else req.body.tour = req.params.id;

  if (req.body?.user) req.body.user = req.body.user;
  else req.body.user = req.user.id;

  console.log(req.body.tour);

  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getAreview = factory.getOne(Review);
exports.postReview = factory.addOne(Review);
exports.deleteReview = factory.deleteOne(Review);
exports.updateReview = factory.updateOne(Review);
