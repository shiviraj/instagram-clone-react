import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import UserAvatar from '../user/UserAvatar';

const NewPost = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="new-post">
      <div className="row">
        <UserAvatar user={user} />
        <NavLink to="/createPost" className="write">
          <div className="input-box">What's on your mind, {user.name}?</div>
        </NavLink>
      </div>
      <div className="divider"></div>
      <NavLink to="/createPost" className="photos">
        <div>Photos</div>
      </NavLink>
    </div>
  );
};

export default NewPost;
