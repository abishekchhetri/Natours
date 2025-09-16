const express = require('express');
const authHandler = require('../controller/authcontroller');
const viewHandler = require('../controller/viewController');
const bookingHandler = require('../controller/bookingController');
const router = express.Router();

router.use(authHandler.isLoggedIn);

router.get('/', viewHandler.overview); //we get it from views/base.pug directly it is as shortcut
router.get('/login', viewHandler.login);

// router.use(authHandler.protect);
router.get('/tour/:tour', viewHandler.viewTours);
router.get('/me', authHandler.protect, viewHandler.getAccount);
router
  .route('/create-booking/:tour/:user/:price')
  .get(authHandler.protect, bookingHandler.createBooking);

router.route('/my-tours').get(authHandler.protect, viewHandler.getTourOfUser);

//this is for the traditional form submit with method and action
// router.post(
//   '/user-change-info',
//   authHandler.protect,
//   viewHandler.changeUserInfo,
// );
//logout was handled by a button

module.exports = router;
