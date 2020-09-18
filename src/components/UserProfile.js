import React from 'react';
import avatar from '../icons/avatar.png';

const UserProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile__header">
        <div className="profile__avatar">
          <img src={avatar} />
        </div>
        <div className="user-details">
          <div className="row user-info">
            <div>shiviraj</div>
            <div className="edit-profile">Edit Profile</div>
          </div>
          <div className="row">
            <div>47 posts</div>
            <div>255 followers</div>
            <div>251 following</div>
          </div>
          <div className="row">
            <div>Shivam Rajput</div>
          </div>
        </div>
      </div>
      <div className="profile__body">News Feeds </div>
    </div>
  );
};

export default UserProfile;
