import React, { useState, useEffect } from 'react';
import PostContext from '../../context/PostContext';
import Posts from '../post/posts';
import NewPost from '../post/NewPost';
import NewPostModal from '../post/NewPostModal';
import fetchApi from '../../api/fetchApi';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    fetchApi({ type: 'NEWS_FEEDS' }).then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <PostContext.Provider
        value={{ posts, setPosts, isOpenModal, setIsOpenModal }}
      >
        <NewPost />
        <Posts />
        {isOpenModal && <NewPostModal />}
      </PostContext.Provider>
    </div>
  );
};

export default Home;
