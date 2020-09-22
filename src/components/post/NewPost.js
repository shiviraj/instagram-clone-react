import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import PostContext from '../../context/PostContext';
import UserAvatar from '../user/UserAvatar';

const NewPost = () => {
  const { user } = useContext(UserContext);
  const { setIsOpenModal } = useContext(PostContext);

  const openModal = (e) => setIsOpenModal(true);

  return (
    <div className="new-post">
      <div className="row">
        <UserAvatar user={user} />
        <div className="input-box" onClick={openModal}>
          What's on your mind, {user.name}?
        </div>
      </div>
      <div className="divider"></div>
      <div className="photos">
        <div onClick={openModal}>Photos</div>
      </div>
    </div>
  );
};

export default NewPost;
