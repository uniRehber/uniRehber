const express = require('express');
const router = express.Router();
const { test, registerUser, loginUser, getUser } = require('../controllers/authController');
<<<<<<< HEAD
const { getUniversities, getUniversityByName } = require('../controllers/universitiesController');
=======
const { getUniversities, getUniversityByName, saveUniversities } = require('../controllers/universitiesController');
>>>>>>> 1d6c7f0c7c900880ff8347b077fd34bc16337ec2

// Auth routes
router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users/:id', getUser);

// University routes
router.get('/universities', getUniversities);
router.get('/university/:name', getUniversityByName);
<<<<<<< HEAD

=======
router.post('/universities', saveUniversities);
>>>>>>> 1d6c7f0c7c900880ff8347b077fd34bc16337ec2
module.exports = router;
