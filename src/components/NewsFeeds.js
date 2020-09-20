import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';
import ImageSlider from './ImageSlider';

import NewsFeedsContext from '../context/NewsFeeds';
import UserContext from '../context/UserContext';
import fetchApi from '../api/fetchApi';

const NewsFeeds = () => {
  const { newsFeeds, setNewsFeed } = useContext(NewsFeedsContext);
  const { user } = useContext(UserContext);

  const toggleLike = (postID) => {
    fetchApi({ type: 'TOGGLE_LIKE', postID, payload: user }).then((likes) => {
      const index = newsFeeds.findIndex(({ _id }) => _id === postID);
      newsFeeds[index].likes = likes;
      setNewsFeed([...newsFeeds]);
    });
  };

  return (
    <>
      {newsFeeds.map(({ postBy: author, ...news }) => {
        return (
          <div className="news-feed" key={news._id}>
            <div className="user">
              <div className="user__avatar">
                <NavLink to={`/profile/${author.username}`}>
                  <img src={`/images/${author.avatar}`} />
                </NavLink>
              </div>
              <div className="user__details">
                <NavLink to={`/profile/${author.username}`}>
                  <div className="user__name">{author.username}</div>
                </NavLink>
                <div className="post__time">
                  <Moment date={news.postAt} interval={1000} fromNow />
                </div>
              </div>
            </div>
            <div className="post">
              <div className="post__content">{news.content}</div>
              <ImageSlider images={news.photos} />
            </div>
            <div className="post__footer">
              <div className="responses">
                <div onClick={() => toggleLike(news._id)}>Like</div>
                <div>Comment</div>
                <div>Share</div>
              </div>
              <div className="total-likes">{news.likes.length} likes</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewsFeeds;
