import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuBar from './MenuBar';
import Logo from './Logo';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="header__container">
      <div className="header">
        <NavLink to="/" exact>
          <Logo />
        </NavLink>
        <SearchBar />
        <MenuBar />
      </div>
    </div>
  );
};

export default Header;
