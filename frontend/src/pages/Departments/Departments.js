import React, { useState } from 'react';
import departmentsData from './Departments.json'; 
import './Departments.css';

export const Departments = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="departments-container">
      <h1>Branşların En İyi Bölümleri </h1>
      <div className="category-buttons">
        <button className={selectedCategory === 'sayısal' ? 'active' : ''} onClick={() => handleCategoryChange('sayısal')}>
          Sayısal
        </button>
        <button className={selectedCategory === 'eşit ağırlık' ? 'active' : ''} onClick={() => handleCategoryChange('eşit ağırlık')}>
          Eşit Ağırlık
        </button>
        <button className={selectedCategory === 'sözel' ? 'active' : ''} onClick={() => handleCategoryChange('sözel')}>
          Sözel
        </button>
        <button className={selectedCategory === 'dil' ? 'active' : ''} onClick={() => handleCategoryChange('dil')}>
          Dil
        </button>
        
      </div>
      {selectedCategory && (
        <div className="departments-list">
          <h2>{selectedCategory.toUpperCase()} Bölümleri </h2>
          <div className="departments-cards">
            {Object.keys(departmentsData[selectedCategory]).map((department) => (
              <div className="department-card" key={department}>
                <h3>{department}</h3>
                <ul>
                  {departmentsData[selectedCategory][department].map((university) => (
                    <li key={university}>{university}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Departments;