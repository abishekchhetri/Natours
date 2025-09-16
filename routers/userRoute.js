const express = require('express');
const userHandler = require('../controller/userController');
const authHandler = require('../controller/authcontroller');

const router = express.Router();

router.route('/login').post(authHandler.login);
router.route('/logout').get(authHandler.logout);
router.route('/signup').post(authHandler.signup);
router.route('/forgotPassword').post(authHandler.forgotPassword);
router.route('/resetPassword/:token').post(authHandler.resetPassword);

//after user is logged in
router.use(authHandler.protect);

router.route('/updatePassword').patch(authHandler.updatePassword);
//for specific users
router.route('/deleteMe').delete(userHandler.deleteMe);
//updateMe is used to update the credentials of the user and uploading the photo
router
  .route('/updateMe')
  .patch(
    userHandler.uploadPhotos,
    userHandler.resizeImage,
    userHandler.updateMe,
  );
router.route('/me').get(userHandler.putUser, userHandler.myDetails);

router.use(authHandler.protectedAccess('admin'));
//admin specific actions
router.route('/').get(userHandler.getAllUsers);
router
  .route('/:id')
  .get(userHandler.findUser)
  .patch(userHandler.updateUser)
  .delete(userHandler.deleteUser);

module.exports = router;
