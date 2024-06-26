import React, { useEffect, useState } from 'react';
import './University.css';

export const University = () => {
  const [universities, setUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/Universities.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched universities:', data); // JSON verilerini kontrol etmek için
        setUniversities(data);
      })
      .catch(error => console.error('Error fetching university data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUniversities = universities.filter(university =>
    university.name && university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('Search term:', searchTerm); // Arama terimini kontrol etmek için
  console.log('Filtered universities:', filteredUniversities); // Filtrelenmiş üniversiteleri kontrol etmek için

  return (
    <div className="container">
      <h2>Üniversitelerimiz</h2>
      <input
        type="text"
        placeholder="Üniversite ara..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="universities-list" id="universitiesList">
        {filteredUniversities.map((university, index) => (
          <div key={index} className="university">
            <h2>{university.name}</h2>
            <p><strong>Üniversite Türü:</strong> {university.type}</p>
            <p><strong>Şehir:</strong> {university.city}</p>
            <p><strong>Web Sitesi:</strong> <a href={university.website} target="_blank" rel="noopener noreferrer">{university.website}</a></p>
            <p><strong>Adres:</strong> {university.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default University;
