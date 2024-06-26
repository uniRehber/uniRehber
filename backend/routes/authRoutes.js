const express = require('express');
const router = express.Router();
const { test, registerUser, loginUser, getUser } = require('../controllers/authController');
// Auth routes
router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users/:id', getUser);


module.exports = router;
