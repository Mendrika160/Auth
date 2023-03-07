const router = require('express').Router();
const {signUpWithGoogleUser,signInWithGoogleUser,signUpUser,signInUser} = require('../controller/UserController');

// route /auth/google
router.post('/google/signup',signUpWithGoogleUser);
router.post('/google/signin',signInWithGoogleUser);

router.post('/user/register',signUpUser);
router.post('/user/login',signInUser);

module.exports = router;