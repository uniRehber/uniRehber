import React from 'react';
import ImageSlider from './Slider/ImageSlider.js'; 
import AboutPage from './AboutPage.js';
import image1 from '../image/1.resim.jpg';
import image2 from '../image/2.resim.jpg';
import image3 from '../image/3.resim.jpg';
import image4 from '../image/4.resim.jpg';

const images = [
  { src: image1, alt: "Ösym KPSS 2024 Lisans KPSS 2024 önlisans KPSS 2024 ortaoğretim" },
  { src: image2, alt: "KPSS 2024 " },
  { src: image3, alt: "Ösym Çıkmış Tüm Önlisans Güncel Soruları" },
  { src: image4, alt: "Ösym Kpss Önlisans Sonuçları " }
];

export const HomePage = () => {
  return (
    <div>
      <ImageSlider images={images} />
      <AboutPage />
    </div>
  )
}

export default HomePage;
