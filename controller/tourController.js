const Tour = require(`../model/tourModel`);
const multer = require('multer');
const sharp = require('sharp');
const express = require('express');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const factory = require('./factoryController');
const app = express();
app.use(express.json());

//MULTER PART
//multer here actually gets file one by one not at once so for single of many file the file filter works flawlessly
const storage = multer.memoryStorage();
const fileFilter = function (req, file, cb) {
  if (file.mimetype.startsWith('image')) cb(null, true);
  else
    cb(new AppError('Your can only upload images but not other files!', false));
};
const upload = multer({ storage, fileFilter });

//this is middleware for photos
exports.uploadTourPhotos = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 3 },
]);

exports.resizeTourImage = catchAsync(async (req, res, next) => {
  // for two types of image
  if (!(req.files?.imageCover || req.files?.images)) return next();
  //for the image cover uploading
  req.body.imageCover = `tours-${Date.now()}-${req.params.id}-imageCover.jpeg`;

  // for cover images
  if (req.files.imageCover) {
    await sharp(req.files.imageCover[0].buffer)
      .resize(2000, 1333)
      .jpeg({ quality: 90 })
      .toFile(`public/img/tours/${req.body.imageCover}`);
  }

  //for multiple images
  let images = [];
  if (req.files.images) {
    const a = await Promise.all(
      req.files.images.map(async (val, idx) => {
        let link =
          (req.body.imageCover = `tours-${Date.now()}-${req.params.id}-image-${idx + 1}.jpeg`);
        await sharp(val.buffer)
          .resize(2000, 1333)
          .jpeg({ quality: 90 })
          .toFile(`public/img/tours/${link}`);
        images.push(link);
      }),
    );

    console.log(a);

    req.body.images = images;
  }

  next();
});
//Factory methods in action CRUD
exports.getAllTours = factory.getAll(Tour);
exports.postTour = factory.addOne(Tour);
exports.getTour = factory.getOne(Tour, {
  path: 'reviews',
  select: 'name photo review rating',
});
exports.updateTour = factory.updateOne(Tour);
exports.deleteTour = factory.deleteOne(Tour);

exports.aliasTours = (req, _, next) => {
  //shows the power of middleware
  console.log(req.query);
  req.query.field = 'name duration difficulty maxGroupSize price';
  req.query.limit = 5;
  req.query.page = 1;
  req.query.price = { lte: 1500 };
  req.query.sort = 'price';
  console.log(req.query);
  next();
};

//AGGREGATION PIPELINE
exports.tourStats = catchAsync(async (req, res, next) => {
  const stats = await Tour.aggregate([
    {
      $match: { ratingsAverage: { $gte: 4.5 } },
    },
    {
      $group: {
        _id: { $toUpper: '$difficulty' },
        numTours: { $sum: 1 },
        numRatings: { $sum: '$ratingsQuantity' },
        ratings: { $push: '$ratingsAverage' },
        avgRating: { $avg: '$ratingsAverage' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
      },
    },
    {
      $sort: { numRatings: 1 },
    },
  ]);

  if (!stats) return next(new AppError('No tours available for this id', 404));
  //pipelining stages
  res.status(200).json({
    status: 'success',
    data: {
      stats,
    },
  });
});

exports.tourMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = +req.params.year;
  console.log(year);

  const plan = await Tour.aggregate([
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },

    { $unwind: '$startDates' },
    {
      $group: {
        _id: { $month: '$startDates' },
        numTourStarts: { $sum: 1 },
        Tours: { $push: '$name' },
      },
    },
    {
      $addFields: {
        month: '$_id',
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
    {
      $sort: {
        month: 1,
      },
    },
    {
      $limit: 12, //limits the field like showing specific result
    },
  ]);
  if (!plan) return next(new AppError('No tours available for this id', 404));
  res.status(200).json({
    status: 'success',
    data: {
      plan,
    },
  });
});

//geoWithin
exports.toursWithin = catchAsync(async (req, res, next) => {
  let { distance, latlng, unit } = req.params;
  let [lat, lng] = latlng.split(',');
  let radius = unit === 'km' ? 6378.15214 : 3963.2;
  distance = unit === 'km' ? distance : distance / 1.6;

  console.log(distance, latlng, unit);

  if (!lat || !lng) {
    return next(new AppError('Enter the valid latitude and longitude'));
  }
  //now using the $geoWithin
  const tours = await Tour.find({
    startLocation: {
      $geoWithin: { $centerSphere: [[+lng, +lat], distance / radius] },
    },
  });

  res.status(200).json({
    status: 'success',
    results: tours.length,
    tours: {
      tours,
    },
  });
});

//geoNear pipeline(priority)
exports.toursNearMe = catchAsync(async (req, res, next) => {
  let { latlng, unit } = req.params;
  if (!lat || !lng) {
    return next(new AppError('Enter the valid latitude and longitude'));
  }
  let [lat, lng] = latlng.split(',');
  const pipeline = await Tour.aggregate([
    {
      $geoNear: {
        near: { type: 'Point', coordinates: [+lng, +lat] },
        distanceField: 'distance',
        includeLocs: 'startLocation',
        distanceMultiplier: unit === 'mi' ? 0.000621371 : 0.001,
        spherical: true,
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        distance: 1,
      },
    },
  ]);
  res.status(200).json({
    status: 'success',
    results: pipeline.length,
    tours: {
      pipeline,
    },
  });
});
