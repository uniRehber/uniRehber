import React, { useState } from "react";
import styled from 'styled-components';
import logo from './kepLogo.png';
import './Header.css';
import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FaUser } from "react-icons/fa";
// import { HomePage } from "./pages/HomePage";
// import { LoginPage } from "./pages/Login/LoginPage";

export const Header = () => {
    
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    
    const updateMenu = () => {
        setIsMenuClicked(!isMenuClicked);
    };

    return (
        <StyledHeader>  
            <div className="logo-container">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="menu-container">
                <ul> 
                    <li><Link to="/">Anasayfa</Link></li>
                </ul>
                <div className="user-icons" >
                    <Link to="/loginpage"><FaUser /></Link>
                    {/* <Route path="/pages/Login/loginpage" element={<LoginPage />} /> */}
                    {/* <Route path="/loginpage" component={<FontAwesomeIcon icon={faUser} />} /> */}
                </div>
                  
                <div className="burgerMenu" onClick={updateMenu}>
                    <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
                    <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
                    <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
                </div>
                <div className={`menu ${isMenuClicked ? 'visible' : 'hidden'}`}>                        
                    <span></span>
                    <span></span>
                    <span></span>                
                </div>
                <ul className={isMenuClicked ? "open" : ""}>
                    {/* <li>
                    About
                    </li>
                    <li>
                    Services
                    </li>
                    <li>
                    Contact
                    </li> */}
                </ul>
            </nav>
        </StyledHeader>
    );
};
