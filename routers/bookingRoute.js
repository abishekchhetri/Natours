const express = require('express');
const authHandler = require('../controller/authcontroller');
const bookingHandler = require('../controller/bookingController');

const router = express.Router();

router.use(authHandler.protect);

router.route('/checkout-session/:tourId').post(bookingHandler.checkoutSession);

router
  .route('/')
  .get(bookingHandler.getAllBooking)
  .post(bookingHandler.postBooking);

router.route('/my-tours').get(bookingHandler.getTourOfUser);
router.use(authHandler.protectedAccess('admin', 'lead-guide'));

router
  .route('/:id')
  .get(bookingHandler.findOneBooking)
  .post(bookingHandler.postBooking)
  .delete(bookingHandler.deleteBooking);

module.exports = router;
