import React from 'react';
import './Header.css';
import HeaderList from "../../shared/HeaderList/HeaderList";
import Logo from "../../shared/Logo/Logo";
import Input from "../../shared/Input/Input";
import ButtonsHeaderGroup from "../../shared/ButtonsHeaderGroup/ButtonsHeaderGroup";

function Header(): JSX.Element {
    return (
        <header className="header">
            <Logo />
            <HeaderList />
            <Input />
            <ButtonsHeaderGroup />
        </header>
    );
}

export default Header;
