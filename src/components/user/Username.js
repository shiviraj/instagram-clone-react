import React from 'react';
import { NavLink } from 'react-router-dom';
import UserAvatar from './UserAvatar';

const Username = ({ user }) => {
  return (
    <>
      <UserAvatar user={user} />
      <div className="user__details">
        <NavLink to={`/profile/${user.username}`}>
          <div className="user__name">{user.username}</div>
        </NavLink>
      </div>
    </>
  );
};

export default Username;
