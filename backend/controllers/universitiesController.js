const axios = require('axios');
const University = require('../models/University');
const fetchUniversities = require('../helpers/fetchUniversities');

// Veritabanına verileri kaydetmek için bir fonksiyon
const saveUniversitiesData = async () => {
  try {
    const universities = await fetchUniversities();

    for (const uni of universities) {
      const { name, wiki_page, web_pages } = uni;

      const exist = await University.findOne({ name });
      if (exist) {
        continue; // Bu üniversite zaten varsa, döngünün bir sonraki iterasyonuna geç
      }

      await University.create({
        name,
        wiki_page,
        web_pages,
      });
    }

    console.log('Universities data saved successfully');
  } catch (error) {
    console.error('Error saving universities:', error);
  }
};

// HTTP isteği bağlamında kullanılacak fonksiyonlar
const saveUniversities = async (req, res) => {
  try {
    await saveUniversitiesData();
    res.status(201).json({ message: 'Universities data saved successfully' });
  } catch (error) {
    console.error('Error saving universities:', error);
    res.status(500).json({
      error: 'Kayıt işlemi sırasında bir hata oluştu',
    });
  }
};

const getUniversities = async (req, res) => {
  try {
    const universities = await University.find();
    res.status(200).json(universities);
  } catch (error) {
    console.error('Error fetching universities:', error);
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
    res.status(200).json(university);
  } catch (error) {
    console.error('Error fetching university:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
};

module.exports = {
  saveUniversities,
  saveUniversitiesData,
  getUniversities,  
  getUniversityByName,
};
