import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import UserAvatar from '../user/UserAvatar';

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
      <UserAvatar user={user} />
    </div>
  );
};
