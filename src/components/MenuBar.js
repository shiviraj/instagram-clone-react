import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div className="menu-bar">
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/" exact>
      Notifications
    </NavLink>
    <NavLink to="/" exact>
      Profile
    </NavLink>
  </div>
);
