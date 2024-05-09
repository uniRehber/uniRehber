import React, { useState } from "react";
import logo from './image/kepLogo.png';
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import './Header.css'; // CSS dosyasını buradan import edin.

export const Header = () => {
    
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    
    const updateMenu = () => {
        setIsMenuClicked(!isMenuClicked);
    };

    return (
        <div className="header-container">  
            <div className="logo-container">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="menu-container">
                <ul id="my-custom-list">
                    <li><Link to="/">Ana Sayfa</Link></li>
                    <li><Link to="/careerquiz">Tercih Robotu</Link></li>
                </ul>
                <div className="user-icons" >
                    <Link to="/loginpage"><FaUser /></Link>
                </div>
                  
                <div className="burgerMenu" onClick={updateMenu}>
                    <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
                    <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
                    <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
                </div>
                <div className={`menu ${isMenuClicked ? 'visible' : 'hidden'}`}>
                    <div>
                        <Link to="/universities">Üniversiteler</Link>
                    </div>
                    <div>
                        <Link to="/departmens">Bölümler</Link>
                    </div>
                    <div>
                        <Link to="/programlar">Programlar</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
