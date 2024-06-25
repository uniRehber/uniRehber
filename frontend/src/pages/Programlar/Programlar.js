import React from 'react';
import mevlana from '../Programlar/mevlana.png';
import erasmus from '../Programlar/erasmus.jpg';
import farabi from '../Programlar/farabi.jpg'; 
import './Programlar.css';

export const Program = ({ title, description, imgSrc }) => {
    return (
        <div className="program">
            <img src={imgSrc} alt={title} />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default function Programlar() {
    const programs = [
        {
            title: "Mevlana",
            description: "Mevlana Değişim Programı, Türkiye ile diğer ülkeler arasında öğrenci değişimini amaçlayan bir programdır.",
            imgSrc: mevlana
        },
        {
            title: "Farabi",
            description: "Farabi Değişim Programı, Türkiye'deki üniversiteler arasında öğrenci değişimini destekler.",
            imgSrc: farabi // Görsel dosyasının doğru şekilde eklenmesi
        },
        {
            title: "Erasmus",
            description: "Erasmus programı, Avrupa'daki üniversiteler arasında öğrenci değişimini teşvik eden bir programdır.",
            imgSrc: erasmus
        }
    ];

    return (
        <div id="container">
            <h1>Öğrenci Değişim Programları</h1>
            <div id="programs">
                {programs.map((program, index) => (
                    <Program key={index} {...program} />
                ))}
            </div>
        </div>
    );
}
