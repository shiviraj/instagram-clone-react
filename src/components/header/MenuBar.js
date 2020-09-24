import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import UserAvatar from '../user/UserAvatar';
import fetchApi from '../../api/fetchApi';

const MenuBar = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const logout = () =>
    fetchApi({ type: 'LOGOUT' }).then(() => {
      history.push('/login');
      setUser(null);
    });
  return (
    <div className="menu-bar">
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/notifications" activeClassName="active" exact>
        Notifications
      </NavLink>
      <div className="profile-option">
        <UserAvatar user={user} />
        <div className="profile-options visible">
          <div className="options-container">
            <NavLink to={`/profile/${user.username}`} activeClassName="">
              View Profile
            </NavLink>
            <NavLink to={`/profile/${user.username}/edit`} activeClassName="">
              Edit Profile
            </NavLink>
            <a onClick={logout}>Logout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
