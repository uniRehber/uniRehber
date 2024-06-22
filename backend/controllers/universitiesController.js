const axios = require('axios');
const University = require('../models/university');

// Veritabanına verileri kaydetmek için bir fonksiyon
const saveUniversities = async (req, res) => {
  try {
    const response = await axios.get('http://universities.hipolabs.com/search?country=Turkey');
    const universities = response.data;

    const savedUniversities = [];

    for (const uni of universities) {
      const { name, country, web_pages } = uni;

      const exist = await University.findOne({ name });
      if (exist) {
        continue; // Bu üniversite zaten varsa, döngünün bir sonraki iterasyonuna geç
      }

      const newUniversity = await University.create({
        name,
        country,
        web_pages,
      });

      savedUniversities.push(newUniversity);
    }

    return res.json(savedUniversities);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: 'Kayıt işlemi sırasında bir hata oluştu',
    });
  }
};

const getUniversities = async (req, res) => {
  try {
    const universities = await University.find();
    res.json(universities);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
};

const getUniversityByName = async (req, res) => {
  const { name } = req.params;
  try {
    const university = await University.findOne({ name });
    if (!university) {
      return res.status(404).json({ error: 'University not found' });
    }
    res.json(university);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
};

module.exports = {
  saveUniversities,
  getUniversities,
  getUniversityByName,
};
