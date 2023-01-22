import React from 'react';
import Logo from '../Assets/Logo.png';
import Navigation from './Nav';

const Header = () => {
    return (
    <header>
        <img src={Logo} alt="Logo" width='300' height='100'/>
        <Navigation />
    </header>
    );
}

export default Header;