import React, { useState, useEffect, useContext } from 'react';
import NewsFeeds from './NewsFeeds';
import NewsFeedsContext from '../context/NewsFeeds';
import fetchApi from '../api/fetchApi';
import UserContext from '../context/UserContext';

const Home = () => {
  const { user } = useContext(UserContext);
  const [newsFeeds, setNewsFeed] = useState([]);

  useEffect(() => {
    fetchApi({ type: 'NEWS_FEEDS', payload: user }).then((data) =>
      setNewsFeed(data)
    );
  }, [user]);

  return (
    <div>
      <NewsFeedsContext.Provider value={{ newsFeeds, setNewsFeed }}>
        <NewsFeeds />
      </NewsFeedsContext.Provider>
    </div>
  );
};

export default Home;
