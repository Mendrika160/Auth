const router = require('express').Router();
const {signUpWithGoogleUser,signInWithGoogleUser} = require('../controller/UserController');

// route /auth/google
router.post('/google/signup',signUpWithGoogleUser);
router.post('/google/signin',signInWithGoogleUser);



module.exports = router;