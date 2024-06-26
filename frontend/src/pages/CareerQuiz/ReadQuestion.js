// Soruları okumak için gerekli modül
const fs = require('fs');

// JSON dosyasını okuyan fonksiyon
const okuSorular = () => {
  const sorularJSON = fs.readFileSync('./sorular.json', 'utf-8');
  return JSON.parse(sorularJSON);
};

module.exports = okuSorular;