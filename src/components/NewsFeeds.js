import React, { useContext } from 'react';
import ImageSlider from './ImageSlider';
import avatar from '../icons/avatar.png';
import NewsFeedsContext from '../context/NewsFeeds';
import fetchApi from '../api/fetchApi';
import Moment from 'react-moment';

const NewsFeeds = () => {
  const { newsFeeds, setNewsFeed } = useContext(NewsFeedsContext);

  const toggleLike = (postID) => {
    fetchApi({ type: 'TOGGLE_LIKE', postID }).then((likes) => {
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
                <img src={author.avatar || avatar} />
              </div>
              <div className="user__details">
                <div className="user__name">{author.username}</div>
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
