/* eslint-disable import/no-extraneous-dependencies */
const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
const User = require('../model/userModel');
//creating tour schema
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      unique: true,
      trim: true,
      minLength: [10, 'name must be atleast 10 characters long'],
      maxLength: [20, 'name must be less than 20 characters'],
      // validate: [validator.isAlpha, 'name must be only alphabet'],
    },
    slugify: String,
    secret: {
      type: Boolean,
      default: false,
    },
    start: Number,

    duration: {
      type: Number,
      required: [true, 'duration is required'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'max group size is required'],
      min: [1, 'atleast one member must be there'],
      // max: [20, 'only upto 20 people allowed'],
    },
    difficulty: {
      type: String,
      required: [true, 'difficulty is required'],
      enum: ['easy', 'medium', 'difficult'],
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
    },
    priceDiscount: {
      type: Number,
      validate: function (val) {
        return this.price >= val;
      },
      message: 'discount price must be always less than or equal to price',
    },
    summary: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'description is required'],
    },
    imageCover: {
      type: String,
      required: [true, 'image cover is required'],
    },
    images: {
      type: [String],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    startDates: {
      type: [Date],
    },
    startLocation: {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: [Number],
      address: String,
      description: String,
    },

    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point'],
        },
        description: String,
        coordinates: [Number],
        address: String,
        day: Number,
      },
    ],
    //guides:[]//was the embedding method
    guides: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ], //making it as the string
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
);

//this is so great and makes document easily accessible
tourSchema.index({ price: 1, ratingsAverage: 1 });
tourSchema.index({ startLocation: '2dsphere' });
//virtual method in mongoose
tourSchema.virtual('durationWeek').get(function () {
  return this.duration / 7;
});

//mongoose middleware for save document slugify middleware
tourSchema.pre('save', function (next) {
  this.slugify = slugify(this.name, { lower: true });
  next();
});

// tourSchema.post('save', (doc, next) => {
//   console.log(doc);
//   next();
// });

// tourSchema.pre('save', async function (next) {
//   const guides = this.guides.map(async (val) => await User.findById(val));
//   this.guides = await Promise.all(guides);
//   console.log(this.guides);

//   next();
// });
//to hide the secret tour entirely from find queries

//prevent secret tour
tourSchema.pre(/^find/, function (next) {
  this.find({ secret: { $ne: true } });
  this.start = Date.now();
  next();
});

// populate the guides in tour
tourSchema.pre(/^find/, function (next) {
  this.populate('guides');
  next();
});

//getting the response time of fetching the data from the m server
tourSchema.post(/^find/, function (_doc, next) {
  console.log(`${Date.now() - this.start}ms`);
  next();
});

//aggregation middleware to hide the secret tour
// tourSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { secret: { $ne: true } } });
//   next();
// });

//now we want to have the tour accessing all review using virtual
//we will refrence all review in virual flawlessly
tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id',
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
