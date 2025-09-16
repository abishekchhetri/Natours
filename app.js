const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const compression = require('compression');
// eslint-disable-next-line import/no-extraneous-dependencies
const rateLimit = require('express-rate-limit');
// eslint-disable-next-line import/no-extraneous-dependencies
const sanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
// eslint-disable-next-line import/no-extraneous-dependencies
const clean = require('xss-clean');
const tourRouter = require('./routers/tourRoute');
const userRouter = require('./routers/userRoute');
const reviewRouter = require('./routers/reviewRoute');
const bookingRouter = require('./routers/bookingRoute');
const viewRouter = require('./routers/viewRoute');
//error handling
const globalErrorHandler = require('./controller/errorController');
const AppError = require('./utils/AppError');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser());
app.use(compression());
//PUG VIEW ENGINE SETUP
app.set('view engine', 'pug');

//this static will share to the web so it can load css and html from our public directory which has html css used in views flawlessly

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hr rate limit
  limit: 100, // Limit each IP to 100 requests per `window`
  standardHeaders: 'draft-6', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
//serving static file
app.use(sanitize());
app.use(clean());
app.use(hpp());

//for the view
app.use('/', viewRouter);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/booking', bookingRouter);

app.all('*', (req, res, next) =>
  next(new AppError('This route is not defined', 404)),
);

app.use(globalErrorHandler);

//lastly we export the app

module.exports = app;
