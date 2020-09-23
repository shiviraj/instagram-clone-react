import React from 'react';
import { NavLink } from 'react-router-dom';
import UserAvatar from './UserAvatar';

const User = ({ user }) => {
  return (
    <div className="user__details">
      <NavLink to={`/profile/${user.username}`}>
        <div className="user__name">{user.username}</div>
      </NavLink>
    </div>
  );
};

const Username = ({ user }) => {
  return (
    <>
      <UserAvatar user={user} />
      <User user={user} />
    </>
  );
};

export default Username;
export { User };
