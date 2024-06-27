import React from 'react';
import './Results.css';

const data = [
  { id: 1, department: 'Bilgisayar Mühendisliği', university: 'İstanbul Üniversitesi', description: 'Yazılım ve donanım alanında kapsamlı eğitim.' },
  { id: 2, department: 'Makine Mühendisliği', university: 'Boğaziçi Üniversitesi', description: 'Makine tasarımı ve üretimi konularında ileri düzey eğitim.' },
  { id: 3, department: 'Elektrik-Elektronik Mühendisliği', university: 'ODTÜ', description: 'Elektrik ve elektronik sistemler üzerine derinlemesine bilgi.' },
  // Diğer bölümler burada listelenebilir.
];

export const Results = () => {
  return (
    <div className="results-container">
      <h2>Sonuçlar Sayfası</h2>
      <p>Quiz sonuçlarına göre size en uygun üniversite bölümleri aşağıda listelenmiştir:</p>
      <table>
        <thead>
          <tr>
            <th>Üniversite</th>
            <th>Bölüm</th>
            <th>Açıklama</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.university}</td>
              <td>{item.department}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="character-analysis">
        <h3>Kişisel Karakteriniz ve Bölüm Uyumu</h3>
        <p>Quizi çözerken belirttiğiniz özelliklere göre, yukarıdaki bölümler sizin için en uygun olanlardır. Analitik düşünce yeteneğiniz, problem çözme becerileriniz ve teknik konulara olan ilginiz bu bölümlerde başarılı olmanızı sağlayacaktır.</p>
      </div>
    </div>
  );
};

export default Results;
