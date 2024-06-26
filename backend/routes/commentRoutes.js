const express = require('express');
const { getComments, addComment } = require('../controllers/commentController');
const router = express.Router();

router.get('/comments/:universityId', getComments);
router.post('/comments', addComment);

module.exports = router;
