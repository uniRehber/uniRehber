import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Universities.css';

export const Universities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://universities.hipolabs.com/search?country=Turkey');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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

export default Universities;
