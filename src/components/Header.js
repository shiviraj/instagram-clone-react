import React from 'react';
import Logo from './Logo';
import MenuBar from './MenuBar';

const Header = () => {
  return (
    <div className="header__container">
      <div className="header">
        <Logo />
        <MenuBar />
      </div>
    </div>
  );
};

export default Header;
