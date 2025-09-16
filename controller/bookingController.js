const catchAsync = require('../utils/catchAsync');
const Tour = require('../model/tourModel');
const Booking = require('../model/bookingModel');
const factory = require('../controller/factoryController');
const User = require('../model/userModel');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.checkoutSession = catchAsync(async (req, res) => {
  //getting the tour fromt he session
  const tour = await Tour.findById(req.params.tourId);

  //sending checkout sessions from stripe
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    customer_creation: 'always',
    customer_email: req.user.email,
    // Line items with images
    line_items: [
      {
        // Option 1: Using price_data with images
        price_data: {
          currency: 'usd',
          product_data: {
            name: tour.name,
            description: tour.summary,
            images: [
              'https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg',
            ],
          },
          unit_amount: tour.price * 100, // $199.00
        },
        quantity: 1,
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
          maximum: 5,
        },
      },
    ],
    //tour/user/price
    success_url: `${req.protocol}://${req.get('host')}/create-booking/${tour.id}/${req.user.id}/${tour.price}`,
    cancel_url: `${req.protocol}://${req.get('host')}/`,
  });

  res.status(200).json({ url: session.url });
});

//after successful checkout session we want to move the success url to create the booking successfully
exports.createBooking = catchAsync(async (req, res) => {
  //we need {tour,user,price} //2 ids and number
  const { tour, user, price } = req.params;
  if (!tour && !user && !price)
    res.redirect(`${req.protocol}://${req.get('host')}/`);

  await Booking.create({
    tour,
    user,
    price,
  });
  res.redirect(`${req.protocol}://${req.get('host')}/`);
});

exports.getTourOfUser = catchAsync(async (req, res) => {
  //child refrencing from user to booking so we can get all the booking associated with user
  const bookingOfUser = await User.findById(req.user.id).populate('booking');

  //getting tour from the booking user
  const tourOnly = bookingOfUser.booking.map((val) => val.tour);
  console.log(tourOnly);

  res.status(200).json({
    status: 'success',
    results: tourOnly.length,
    tours: tourOnly,
  });
});

//triggered by (/) route
exports.getAllBooking = factory.getAll(Booking);
exports.postBooking = factory.addOne(Booking);

//triggered by (/:id) route
exports.deleteBooking = factory.deleteOne(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.findOneBooking = factory.getOne(Booking);
