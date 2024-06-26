const express = require('express');
const { getUniversities, addUniversity } = require('../controllers/universityController');
const router = express.Router();

router.get('/universities', getUniversities);
router.post('/universities', addUniversity);

module.exports = router;
