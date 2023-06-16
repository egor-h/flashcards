import React from 'react';
import './Logo.css';
import logo from "../../assets/img/quizletLogo.svg";
function Logo(): JSX.Element {
    return (
        <img src={logo} alt="quizlet" className="logo"/>
    );
}

export default Logo;
