import React, { useContext, useState } from 'react';
import UserContext from '../../context/UserContext';
import UserAvatar from './UserAvatar';
import fetchApi from '../../api/fetchApi';

const ChangeAvatar = () => {
  const { user, setUser } = useContext(UserContext);
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', file);
    fetchApi({ type: 'UPLOAD_AVATAR', data }).then((res) => setUser(res));
  };

  const handleClick = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    setTimeout(() => document.querySelector('#upload').click());
  };

  const handleUploadButton = (e) => {
    document.getElementById('input').click();
  };

  return (
    <div>
      <div className="user-avatar-big">
        <UserAvatar user={user} />
      </div>
      <form
        encType="multipart/form-data"
        className="hidden"
        onSubmit={handleUpload}
      >
        <input
          type="file"
          id="input"
          name="file"
          onChange={handleClick}
          accept="image/*"
        />
        <input type="submit" id="upload" />
      </form>
      <div className="change-avatar">
        <div
          onClick={handleUploadButton}
          title="Please upload image with equal sides."
        >
          Change Profile Photo
        </div>
      </div>
    </div>
  );
};

export default ChangeAvatar;
