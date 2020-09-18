import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <div className="menu-bar">
    <NavLink to="/" activeClassName="active" exact>
      Home
    </NavLink>
    <NavLink to="/notifications" activeClassName="active" exact>
      Notifications
    </NavLink>
    <NavLink to="/profile" activeClassName="active" exact>
      Shivam
    </NavLink>
  </div>
);
