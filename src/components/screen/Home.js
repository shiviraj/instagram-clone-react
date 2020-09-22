import React, { useState, useEffect } from 'react';
import PostContext from '../../context/PostContext';
import Posts from '../post/posts';
import NewPost from '../post/NewPost';
import NewPostModal from './NewPostModal';
import fetchApi from '../../api/fetchApi';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchApi({ type: 'NEWS_FEEDS' }).then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <PostContext.Provider value={{ posts, setPosts }}>
        <NewPost />
        <Posts />
      </PostContext.Provider>
    </div>
  );
};

export default Home;
