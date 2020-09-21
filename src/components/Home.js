import React, { useState, useEffect } from 'react';
import NewsFeeds from './NewsFeeds';
import NewsFeedsContext from '../context/NewsFeeds';
import fetchApi from '../api/fetchApi';

const Home = () => {
  const [newsFeeds, setNewsFeed] = useState([]);

  useEffect(() => {
    fetchApi({ type: 'NEWS_FEEDS' }).then((data) => setNewsFeed(data));
  }, []);

  return (
    <div>
      <NewsFeedsContext.Provider value={{ newsFeeds, setNewsFeed }}>
        <NewsFeeds />
      </NewsFeedsContext.Provider>
    </div>
  );
};

export default Home;
