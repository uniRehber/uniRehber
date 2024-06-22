const axios = require('axios');
const cheerio = require('cheerio');

const fetchUniversities = async () => {
  try {
    const response = await axios.get('https://yokatlas.yok.gov.tr/universite.php');
    const html = response.data;
    const $ = cheerio.load(html);

    const universities = [];
    $('table.wikitable tbody tr').each((index, element) => {
      const universityName = $(element).find('td:nth-child(2)').text().trim();
      const universityPage = $(element).find('td:nth-child(2) a').attr('href');
      const universityWebPage = $(element).find('td:nth-child(3) a').attr('href');

      if (universityName && universityPage) {
        universities.push({
          name: universityName,
          wiki_page: `https://en.wikipedia.org${universityPage}`,
          web_pages: universityWebPage ? [universityWebPage] : []
        });
      }
    });

    return universities;
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    throw error;
  }
};

module.exports = fetchUniversities;
