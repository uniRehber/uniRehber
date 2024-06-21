const University = require('../models/university');
const axios = require('axios');

// Veritabanına verileri kaydetmek için bir fonksiyon
export const saveUniversities = async () => {
  try {
    const response = await axios.get('http://universities.hipolabs.com/search?country=Turkey');
    const universities = response.data;

    // Veritabanına kaydetme işlemi
    for (const uni of universities) {
      await University.findOneAndUpdate(
        { name: uni.name },
        { name: uni.name, country: uni.country, web_pages: uni.web_pages },
        { upsert: true } // Veri zaten varsa günceller, yoksa ekler
      );
    }
  } catch (error) {
    console.error('Error fetching or saving data:', error);
  }
};

exports.getUniversities = async (req, res) => {
  try {
    const universities = await University.find();
    res.json(universities);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
};
const University = require('../models/university');
const axios = require('axios');

// Veritabanına verileri kaydetmek için bir fonksiyon
const saveUniversities = async () => {
  try {
    const response = await axios.get('http://universities.hipolabs.com/search?country=Turkey');
    const universities = response.data;

    // Veritabanına kaydetme işlemi
    for (const uni of universities) {
      await University.findOneAndUpdate(
        { name: uni.name },
        { name: uni.name, country: uni.country, web_pages: uni.web_pages },
        { upsert: true } // Veri zaten varsa günceller, yoksa ekler
      );
    }
    console.log('University data saved successfully.');
  } catch (error) {
    console.error('Error fetching or saving data:', error);
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

exports.getUniversityByName = async (req, res) => {
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

// Sunucu başlatıldığında verileri kaydetmek için bu fonksiyonu çağırabilirsiniz
saveUniversities();
