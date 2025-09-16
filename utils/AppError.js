class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = Math.round(this.statusCode / 100) === 4 ? 'fail' : 'error';
    Error.captureStackTrace(this);
    this.isOperational = true;
  }
}

module.exports = AppError;
