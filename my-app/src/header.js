import React, { useState } from "react";
import styled from 'styled-components';
import logo from './kepLogo.png';

const StyledHeader = styled.div`
    height: 15vh;
    background-color: #050509;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-container{
        flex: 0.5;

        img {
            height: 80px;
        }
    }
    .menu-container{
        flex: 2;
    }

    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .burgerMenu {
        margin-left: auto; /*ögeyi sağa dayalı  yapar*/ */
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        cursor: pointer;
    }
    .burger-bar{
        margin: 5px;
        width: 2.5em;
        height: 0.2em;
        background-color: white;
        border-radius: 0.5em;

    }
    .hidden{
        display: none;
    }
    .visible{
        display: block;
    }
    /*clicked*/
    .burger-bar.clicked:nth-child(1){
        transform: rotate(45deg) translate(0.75em, 1.25em);
        transition: ease-out 0.5s;
    }
    .burger-bar.clicked:nth-child(2){
        transform: scale(0.1);
        transition: ease-out 0.5s;
    }
    .burger-bar.clicked:nth-child(3){
        transform: rotate(45deg) translate(-0.5em, 1em);
        transition: ease-out 0.5s;
    }

    /*unclicked*/
    .burger-bar.unclicked{
        transform: rotate(0) translate(0);
        transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
    }

    ul {
        list-style: none;
    }

    ul li {
        float: left;
        color: #FFF;
    }

    ul li:not(:first-child){
        margin-left: 50px;
    }
`;

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
                    <li>Arama</li>
                    <li>Anasayfa</li>
                    <li>Hakkımızda</li>
                </ul>
                <div className="burgerMenu" onClick={updateMenu}>
                    <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
                    <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
                    <div className={`burger-bar ${isMenuClicked ? 'clicked' : 'unclicked'}`} />
                </div>
            </nav>
            <div className={`menu ${isMenuClicked ? 'visible' : 'hidden'}`}>
                {/* Buraya menü içeriğini ekleyebilirsiniz */}
            </div>
        </StyledHeader>
    );
};
