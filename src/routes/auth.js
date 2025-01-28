const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);         //Route for registeration of user
router.post('/login', login);               ////Route for Login of user

module.exports = router;
