import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../icons/logo.png';

export default () => (
  <div className="logo">
    <NavLink to="/" exact>
      <img src={logo} />
    </NavLink>
  </div>
);
