import React from 'react'
import { Header } from '../header'; //her sayfaya headerı tek tek ekledik
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
        <Header/>
        Anasayfaya Hoşgeldiniz
    </div>
  )
}


