const mongoose = require('mongoose');
const { Schema } = mongoose;

const UniversitySchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  city: { type: String, required: true },
  website: { type: String, required: true },
  address: { type: String, required: true }
});

const University = mongoose.model('University', UniversitySchema);

module.exports = University;
