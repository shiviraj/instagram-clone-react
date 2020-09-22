import React from 'react';
import ChangePassword from '../user/ChangePassword';
import EditUser from '../user/EditUser';
import ChangeAvatar from '../user/ChangeAvatar';

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <div className="change-avatar-container">
        <ChangeAvatar />
      </div>
      <div className="row">
        <EditUser />
        <ChangePassword />
      </div>
    </div>
  );
};

export default EditProfile;
