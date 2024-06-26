
const mongoose = require('mongoose')
const {Schema} = mongoose

const CommentSchema = new mongoose.Schema({
    universityId: String,
    username: String,
    comment: String,
    date: { type: Date, default: Date.now }
  });
  
  const Comment = mongoose.model('Comment', CommentSchema);