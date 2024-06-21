const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  web_pages: { type: [String], required: true },
});

const University = mongoose.model('University', universitySchema);

module.exports = University;
