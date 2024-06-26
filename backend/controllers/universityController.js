const University = require('../models/university');

exports.getUniversities = async (req, res) => {
  try {
    const universities = await University.find({});
    res.json(universities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
};

exports.addUniversity = async (req, res) => {
  try {
    const newUniversity = new University(req.body);
    await newUniversity.save();
    res.json(newUniversity);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add university' });
  }
};
