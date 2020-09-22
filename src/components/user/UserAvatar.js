import React from 'react';
import { NavLink } from 'react-router-dom';

const UserAvatar = ({ user }) => {
  return (
    <>
      <div className="user__avatar">
        <NavLink to={`/profile/${user.username}`}>
          <img src={`/images/${user.avatar}`} />
        </NavLink>
      </div>
    </>
  );
};

export default UserAvatar;
