import React, { useContext } from 'react';
import ImageSlider from './ImageSlider';
import avatar from '../icons/avatar.png';
import NewsFeedsContext from '../context/NewsFeeds';

const NewsFeeds = () => {
  const { newsFeeds } = useContext(NewsFeedsContext);
  return (
    <>
      {newsFeeds.map(({ postBy: author, ...news }) => {
        return (
          <div className="news-feed" key={news._id}>
            <div className="user">
              <div className="user__avatar">
                <img src={author.avatar || avatar} />
              </div>
              <div className="user__details">
                <div className="user__name">{author.username}</div>
              </div>
            </div>
            <div className="post">
              <div className="post__content">{news.content}</div>
              <ImageSlider images={news.photos} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewsFeeds;
