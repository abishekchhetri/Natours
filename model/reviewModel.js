const mongoose = require('mongoose');
const Tour = require('./tourModel');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'write any review before posting!'],
    },
    rating: {
      type: Number,
      required: [true, 'give rating!'],
      validate: [
        function (val) {
          return val > 1 && val <= 5;
        },
        'rating must be equal or between 1 and 5',
      ],
      default: 0,
    },
    createdAt: { type: Date, default: new Date(Date.now()) },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to a tour'],
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

//it is just embeddin so much document in the reviews, and because we just want the id so we didnt used this
// reviewSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'tours',
//     select: 'name',
//   });
//   next();
// });

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: '_id name',
  });
  next();
});

//a tour can have only one user so
reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

//calculating the statistics like avgRating and numRating function
reviewSchema.statics.calcAverageRating = async function (tourId) {
  const aggregateQuery = await this.aggregate([
    {
      $match: { tours: tourId },
    },
    {
      $group: {
        _id: '$tour',
        avgRating: { $avg: '$rating' },
        numRating: { $sum: 1 },
      },
    },
  ]);

  console.log('deleted!!');

  await Tour.findByIdAndUpdate(tourId, {
    ratingsAverage: aggregateQuery[0].avgRating,
    ratingsQuantity: aggregateQuery[0].numRating,
  });
};

reviewSchema.post('save', async function () {
  await this.constructor.calcAverageRating(this.tours);
});

reviewSchema.post(/^findOneAnd/, async function (docs) {
  console.log(docs);
  docs.constructor.calcAverageRating(docs.tours);
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
