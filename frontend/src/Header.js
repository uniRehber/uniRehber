import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import './Header.css';
import logo from './image/kepLogo.png';

export const Header = () => {
  const navigate = useNavigate();
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="unirehber" />
      </div>
      <nav className="menu-container">
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/careerquiz">Tercih Robotu</Link></li>
        </ul>
        <div className="user-icons">
          <button onClick={() => navigate('/login')}><FaUser /></button>
        </div>
        <div className="burgerMenu" onClick={updateMenu}>
          <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
          <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
          <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
        </div>
      </nav>
      <div className={`menu ${isMenuClicked ? 'visible' : 'hidden'}`}>
        <button onClick={() => navigate('/university')}>Üniversiteler</button>
        <button onClick={() => navigate('/departments')}>Bölümler</button>
        <button onClick={() => navigate('/programlar')}>Programlar</button>
      </div>
    </div>
  );
};

export default Header;
