import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import Username from '../user/Username';
import Slider from '../utils/ImageSlider';
import fetchApi from '../../api/fetchApi';

const NewPostModal = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [content, setContent] = useState('');
  const [file, setFile] = useState(undefined);
  const [media, setMedia] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const handleMediaUpload = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', file);
    fetchApi({ type: 'UPLOAD_MEDIA', data }).then(({ image }) =>
      setMedia(media.concat(image))
    );
  };

  const handleUploadClick = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    setTimeout(() => document.querySelector('#uploadFile').click());
  };

  const handleUpload = (e) => {
    document.getElementById('inputFile').click();
  };

  const closeModal = (e) => {
    const ids = ['container', 'close-modal'];
    ids.includes(e.target.id) && history.push('/');
  };

  const uploadPost = () => {
    fetchApi({ type: 'UPLOAD_POST', data: { content, media } }).then(() =>
      history.push('/')
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
        <div className="photos">
          <Slider media={media} src="blob" />
        </div>
        <form
          encType="multipart/form-data"
          className="hidden"
          onSubmit={handleMediaUpload}
        >
          <input
            type="file"
            id="inputFile"
            onChange={handleUploadClick}
            name="file"
            accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv"
          />
          <input type="submit" id="uploadFile" />
        </form>
        <div className="upload-photos">
          <div className="add-image" onClick={handleUpload}>
            Add Photo/Video
          </div>
        </div>
        <div className="upload-post">
          <button onClick={uploadPost} disabled={!media.length && !content}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;
