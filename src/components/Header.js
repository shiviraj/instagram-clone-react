import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuBar from './MenuBar';
import logo from '../icons/logo.png';

const Header = () => {
  return (
    <div className="header__container">
      <div className="header">
        <div className="logo">
          <NavLink to="/" exact>
            <img src={logo} />
          </NavLink>
        </div>
        <MenuBar />
      </div>
    </div>
  );
};

export default Header;
