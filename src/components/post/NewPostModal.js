import React, { useContext, useState } from 'react';
import PostContext from '../../context/PostContext';
import UserContext from '../../context/UserContext';
import Username from '../user/Username';
import fetchApi from '../../api/fetchApi';

const NewPostModal = () => {
  const { setIsOpenModal } = useContext(PostContext);
  const { user } = useContext(UserContext);
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const closeModal = (e) => {
    const ids = ['container', 'close-modal'];
    ids.includes(e.target.id) && setIsOpenModal(false);
  };

  const uploadPost = () => {
    if (!content) return;
    fetchApi({ type: 'UPLOAD_POST', data: { content } }).then(() =>
      setIsOpenModal(false)
    );
  };

  return (
    <div className="modal-container" onClick={closeModal} id="container">
      <div className="modal">
        <div className="modal-header">
          <div className="modal-title">Create Post</div>
          <div className="modal-close" id="close-modal" onClick={closeModal}>
            X
          </div>
        </div>
        <div className="user">
          <Username user={user} />
        </div>
        <div className="post-area">
          <textarea
            className="textarea"
            placeholder={`What's on your mind, ${user.name}?`}
            value={content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="photos"></div>
        <div className="upload-photos"></div>
        <div onClick={uploadPost} className="upload-post">
          Post
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;
