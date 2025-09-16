const experss = require('express');
const reviewHandler = require('../controller/reviewcontroller');
const authController = require('../controller/authcontroller');

const router = experss.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(reviewHandler.addUserId, reviewHandler.getAllReviews)
  .post(reviewHandler.addUserId, reviewHandler.postReview);

router.use(authController.protectedAccess('admin'));
router
  .route('/:id')
  .patch(reviewHandler.updateReview)
  .delete(reviewHandler.deleteReview)
  .get(reviewHandler.getAreview);

module.exports = router;
