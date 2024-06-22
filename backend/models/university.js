const mongoose = require('mongoose')
const {Schema} = mongoose

const universitySchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  web_pages: { type: [String], required: true },
});

const University = mongoose.model('University', universitySchema);

module.exports = University;
