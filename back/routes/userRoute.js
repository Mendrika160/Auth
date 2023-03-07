const router = require('express').Router();
const {getUserInfo,getAllUser} = require('../controller/UserController');

// route /api/user/:id
router.get('/user/:id',getUserInfo);

//route /api/users
router.get('/users/:id',getAllUser);




module.exports = router;