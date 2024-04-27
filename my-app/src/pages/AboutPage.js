import React from 'react'
import { Header } from '../header';
import { Link } from 'react-router-dom';


export const AboutPage = () => {
  return (
    <div>
        <Header/>
        Hakkımızda
      <Link to="/aboutpage">Go to aboutpage</Link>
    </div>
  )
}