const AppError = require('../utils/AppError');

//OPERATIONAL ERRORS LIKE INVALID ID,
const handleCastError = (err) => {
  const message = `Invalid ${err.path} with value ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateKeyError = (err) => {
  const message = `${err.errorResponse.keyValue.name} is duplicate try other`;
  return new AppError(`${message}`, 401);
};

const handleValidationError = (err) => {
  const message = [];
  Object.values(err.errors).forEach((error) => {
    message.push(error.properties.message);
  });
  return new AppError(message.join(', '), 404);
};

const handleExpiredJwtError = () =>
  new AppError('Token has expired try signing in', 401);

const handleTokenError = () => new AppError('Invalid token passed', 401);
//SENDING DEV AND PROD ERRORS
const sendErrorDev = (err, req, res) => {
  if (req.originalUrl.startsWith('/api'))
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      error: err,
    });

  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong',
    err,
  });
};

const sendErrorProd = (err, req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    } else {
      console.log(`ERROR OCCURED : ${err}`);
      return res.status(500).json({
        status: 'error',
        message: 'Something went extremely wrong',
      });
    }
  }

  //RENDERING ERROR ACTUALLY
  if (err.isOperational) {
    return res.status(err.statusCode).render('error', {
      title: 'Something went wrong',
      err,
    });
  } else {
    console.log(`ERROR OCCURED : ${err}`);
    err.status = 'error';
    err.message = 'Something went extremely wrong';
    return res.status(500).render('error', {
      title: 'Something went wrong',
      err,
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    if (err.name === 'CastError') err = handleCastError(err);
    if (err.code === 11000) err = handleDuplicateKeyError(err);
    if (err.name === 'ValidationError') err = handleValidationError(err);
    if (err.name === 'TokenExpiredError') err = handleExpiredJwtError(err);
    if (err.name === 'JsonWebTokenError') err = handleTokenError(err);
    sendErrorProd(err, req, res);
  }
};
