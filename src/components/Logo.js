import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../icons/logo.png';

export default () => (
  <NavLink to="/" exact>
    <img src={logo} />
  </NavLink>
);
