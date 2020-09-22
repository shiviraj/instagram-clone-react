import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuBar from './MenuBar';
import Logo from './Logo';

const Header = () => {
  return (
    <div className="header__container">
      <div className="header">
        <NavLink to="/" exact>
          <Logo />
        </NavLink>
        <MenuBar />
      </div>
    </div>
  );
};

export default Header;
