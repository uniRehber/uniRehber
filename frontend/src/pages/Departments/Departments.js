// Örneğin Departments component içinde

import React, { useState } from 'react';
import departmentsData from './Departments.json';

export const Departments = () => {
  const [selectedCategory, setSelectedCategory] = useState('sayisal');
  const categories = Object.keys(departmentsData);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1>Bölümler Sayfası</h1>
      <div>
        {categories.map((category) => (
          <button key={category} onClick={() => handleCategoryChange(category)}>
            {category.toUpperCase()}
          </button>
        ))}
      </div>
      <div>
        {departmentsData[selectedCategory].map((item, index) => (
          <div key={index}>
            <p>Üniversite: {item.university}</p>
            <p>Bölüm: {item.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
