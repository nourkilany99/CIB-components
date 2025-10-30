import React from 'react';
import Logo from '../img/CibLogo.png';
import './Header.css';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div className="div_logo">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <Nav title="About us" />
      <Nav title="Investor relation" />
      <Nav title="Responsible Banking" />
      <Nav title="Newsroom" />
      <Nav title="Learning center" />
      <Nav title="careers" />
      <Nav title="Other" />
    </header>
  );
};

export default Header;