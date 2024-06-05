import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const UniversityDetails = () => {
  const { name } = useParams();
  const [university, setUniversity] = useState(null);

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const response = await axios.get(`http://universities.hipolabs.com/search?name=${name}`);
        setUniversity(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchUniversity();
  }, [name]);

  if (!university) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{university.name}</h1>
      <p>{university.country}</p>
      <p><a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">{university.web_pages[0]}</a></p>
    </div>
  );
};

export default UniversityDetails;
