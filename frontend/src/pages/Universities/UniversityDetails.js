import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UniversityDetails = ({ match }) => {
  const { name } = match.params;
  const [university, setUniversity] = useState(null);

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/university/${name}`); // Backend endpointi
        setUniversity(response.data);
      } catch (error) {
        console.error('Error fetching university:', error);
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