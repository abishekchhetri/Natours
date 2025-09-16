const express = require('express');
const tourHandler = require('../controller/tourController');
const authHandler = require('../controller/authcontroller');
const reviewRoute = require('../routers/reviewRoute');

const router = express.Router();
router.use(authHandler.protect);

router
  .route('/top5cheap')
  .get(
    authHandler.protectedAccess('admin', 'lead-guide'),
    tourHandler.aliasTours,
    tourHandler.getAllTours,
  );
router
  .route('/tourStats')
  .get(
    authHandler.protectedAccess('admin', 'lead-guide'),
    tourHandler.getAllTours,
  );

router
  .route('/monthly-plan/:year')
  .get(
    authHandler.protectedAccess('admin', 'lead-guide'),
    tourHandler.tourMonthlyPlan,
    tourHandler.getAllTours,
  );

//FOR GEOSPATIAL DATA
router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourHandler.toursWithin);

router.route('/tours-near-me/:latlng/unit/:unit').get(tourHandler.toursNearMe);
// router.params('id', tourHandler.checkId); //our custom middleware

///////////////////////////////////////////////////////
//implementing simple route like /:id/reviews so we could post from here
// router
//   .route('/:id/reviews')
//   .post(
//     authHandler.protect,
//     authHandler.protectedAccess('user'),
//     reviewHandler.postReview,
//   );
//instead of this we have a better way since our code is redundant
router.use('/:id/reviews', reviewRoute);

//////////////////////////////

router
  .route('/')
  .get(tourHandler.getAllTours)
  .post(
    authHandler.protectedAccess('admin', 'lead-guide'),
    tourHandler.postTour,
  );

router
  .route('/:id')
  .get(tourHandler.getTour)
  .patch(
    authHandler.protectedAccess('admin'),
    tourHandler.uploadTourPhotos,
    tourHandler.resizeTourImage,
    tourHandler.updateTour,
  )
  .delete(authHandler.protectedAccess('admin'), tourHandler.deleteTour);

//////////////////////////////////////

module.exports = router;
