import React from 'react';
import ImageSlider from './Slider/ImageSlider.js'; 
import AboutPage from './AboutPage.js';
import image1 from '../image/1.resim.jpg';
import image2 from '../image/2.resim.jpg';
import image3 from '../image/3.resim.jpg';
import image4 from '../image/4.resim.jpg';

const images = [image1, image2, image3, image4];

export const HomePage = () => {
  return (
    <div>
      <h3>ÜniRehber ile üniversite seçimi artık daha kolay!</h3>
      <ImageSlider images={images} />
      <AboutPage />
      
    </div>
  )
}

export default HomePage;
