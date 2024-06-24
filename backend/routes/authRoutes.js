const express = require('express');
const router = express.Router();
const { test, registerUser, loginUser, getUser } = require('../controllers/authController');
const { getUniversities, getUniversityByName, saveUniversities } = require('../controllers/universitiesController');

// Auth routes
router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users/:id', getUser);

// University routes
router.get('/universities', getUniversities);
router.get('/university/:name', getUniversityByName);

module.exports = router;
