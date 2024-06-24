import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Universities.css';

const Universities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/universities'); // Backend endpoint'inizi kullanın
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const addUniversity = async (university) => {
    try {
      const response = await axios.post('http://localhost:8000/api/university', university);
      console.log('Added University:', response.data);
    } catch (error) {
      console.error('Error adding university:', error);
    }
  };

  addUniversity({
    name: 'Süleyman Demirel Üniversitesi',
    country: 'Turkey',
    web_pages: ['https://w3.sdu.edu.tr']
  });

  return (
    <div>
      <List>
        {data.map((university) => (
          <ListItem button component={Link} to={`/university/${university.name}`} key={university.name}>
            <ListItemText primary={university.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export const UniversityDetails = ({ match }) => {
  const { name } = match.params;
  const [university, setUniversity] = useState(null);

  useEffect(() => {
    const fetchUniversity = async () => {
      const response = await axios.get(`http://universities.hipolabs.com/search?name=${name}`);
      setUniversity(response.data[0]);
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
      <p>{university.web_pages[0]}</p>
    </div>
  );
};

export default Universities;