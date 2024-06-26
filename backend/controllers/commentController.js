const Comment = require('../models/comment.js');

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ universityId: req.params.universityId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};

exports.addComment = async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    await newComment.save();
    res.json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};
