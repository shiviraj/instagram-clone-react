import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default () => {
  const { user } = useContext(UserContext);
  return (
    <div className="menu-bar">
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/notifications" activeClassName="active" exact>
        Notifications
      </NavLink>
      <NavLink to="/profile/shiviraj" activeClassName="active" exact>
        <div className="user__avatar">
          <img src={`/images/${user.avatar}`} />
        </div>
      </NavLink>
    </div>
  );
};
