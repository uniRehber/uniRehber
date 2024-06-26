const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  universityId: {
    type: Schema.Types.ObjectId,
    ref: 'University'
  },
  username: String,
  comment: String,
  date: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
