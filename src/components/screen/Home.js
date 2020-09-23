import React, { useState, useEffect } from 'react';
import PostContext from '../../context/PostContext';
import Posts from '../post/Posts';
import NewPost from '../post/NewPost';
import fetchApi from '../../api/fetchApi';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchApi({ type: 'NEWS_FEEDS' }).then((data) => setPosts(data));
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <div>
        <NewPost />
        <Posts />
      </div>
    </PostContext.Provider>
  );
};

export default Home;
