import React, { useState } from 'react';
import sorular from './Questions.json';
import { useNavigate } from 'react-router-dom'; 
import Switch from '@mui/material/Switch';
import './CareerQuiz.css';

export const CareerQuiz = () => {
  const [cevapDurumu, setCevapDurumu] = useState({});

  const cevapSecildi = (index) => {
    setCevapDurumu(prevCevapDurumu => ({
      ...prevCevapDurumu,
      [index]: !prevCevapDurumu[index]
    }));
  };

  const navigate = useNavigate(); 

  const handleTamamlaClick = () => {
    navigate('/careerquiz/results'); // Buttona basıldığında /results sayfasına yönlendir
  };

  return (
    <div className="career-quiz">
      <div className="header">
        <h1> Meslek Testi </h1>
        <p>Bu test, meslek seçimi ve belirlemesi hakkında size yardımcı olmak amacıyla hazırlanmıştır. Kendinize uygun gördüğünüz seçenekleri lütfen işaretleyiniz.</p>
      </div>
      <div className="sorular">
        {sorular.map((soru, index) => (
          <div key={index} className="soru">
            <Switch
              checked={cevapDurumu[index]}
              onChange={() => cevapSecildi(index)}
            />
            <p>{index + 1}. {soru.soru}</p>
          </div>
        ))}
      </div>
      <div className="tamamla-bolumu">
        <button onClick={handleTamamlaClick}>Tamamla</button>
      </div>
    </div>
  );
}

export default CareerQuiz;