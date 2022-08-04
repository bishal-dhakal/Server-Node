const express = require('express')
const router = express.Router();

const { Signup,Login }  = require('../Controller/User.Controller');



router.post('/signup',Signup);
router.post('/login',Login);

module.exports = router;