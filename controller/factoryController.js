const APIfeature = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

//to retrieve mass data with power of api features from find
exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    //RUN QUERY
    let findQuery = {};
    if (req.params.id) findQuery = { tour: req.params.id };
    const feature = new APIfeature(Model.find(findQuery), req.query)
      .filter()
      .sort()
      .fieldLimit()
      .paginate();

    const document = await feature.query;

    //SEND RESPONSE
    res.status(200).json({
      status: 'success',
      result: document.length,
      data: {
        document: document,
      },
    });
  });

//get single document from the model findById
exports.getOne = (Model, popOption) =>
  catchAsync(async (req, res, next) => {
    //now we will populate reviews here

    const query = Model.findById(req.params.id);
    if (popOption) query.populate(popOption);

    const document = await query;

    //sending operational error
    if (!document)
      return next(new AppError('No data available for this id', 404));

    res.status(200).json({
      status: 'success',
      document: {
        document,
      },
    });
  });

//update any doc with a model
exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    // console.log(req.files);

    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!document)
      return next(new AppError('No Data available for this id', 404));
    res.status(201).json({
      status: 'success',
      message: 'updated tour!',
      document: {
        document,
      },
    });
  });

//delete one doc for the available model
exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findByIdAndDelete(req.params.id);
    console.log(document);

    //since no message is got after deletion we delete
    if (!document) return next(new AppError('Data unavilable to delete!', 404));
    res.status(204).json({
      status: 'success',
      message: 'deletion was successful!',
      document: {
        document,
      },
    });
  });

//add one doc for the availabe model
exports.addOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.create(req.body);
    if (!document)
      return next(new AppError('No Data available for this id', 404));
    res.status(201).json({
      status: 'success',
      message: 'tour posted successfully!',
      data: {
        document: document,
      },
    });
  });
