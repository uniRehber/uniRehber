import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const UniversityDetails = () => {
  const { name } = useParams();
=======
import axios from 'axios';

const UniversityDetails = ({ match }) => {
  const { name } = match.params;
>>>>>>> 1d6c7f0c7c900880ff8347b077fd34bc16337ec2
  const [university, setUniversity] = useState(null);

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
<<<<<<< HEAD
        const response = await axios.get(`http://universities.hipolabs.com/search?name=${name}`);
        setUniversity(response.data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
=======
        const response = await axios.get(`http://localhost:8000/api/university/${name}`); // Backend endpointi
        setUniversity(response.data);
      } catch (error) {
        console.error('Error fetching university:', error);
>>>>>>> 1d6c7f0c7c900880ff8347b077fd34bc16337ec2
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
