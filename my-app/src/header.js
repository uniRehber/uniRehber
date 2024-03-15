import React from "react";
import styled from 'styled-components';
import logo from './kepLogo.png';

const StyledHeader = styled.div`
    height: 15vh; //header in kalinliği
    background-color: #050509; //siyah renk
    padding: 0 10px; //logonun içeriye girdiliği
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-container{
        flex: 0.5;

        img {
            height: 80px; // or 8vh
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

    ul {
        list-style: none; // liste gibi görünmemesi için
    }

    ul li {
        float:left;
        color: #FFF; //yazilarin rengi
    }

    ul li:not(:first-child){
        margin-left: 50px; //yazilar arasi mesafe
    }
`;


export const Header = () => {
    return <StyledHeader>
        <div className="logo-container">
           <img src={logo} alt="logo"/>
        </div>
        <nav className="menu-container">
            <ul>
                <li>Arama</li>
                <li>Anasayfa</li>
                <li>Hakkimizda</li>
            </ul>
        </nav>
    </StyledHeader>
   ;};
