import React, { useContext } from 'react';
import Moment from 'react-moment';
import ImageSlider from '../utils/ImageSlider';
import PostContext from '../../context/PostContext';
import Username from '../user/Username';
import fetchApi from '../../api/fetchApi';

const Posts = () => {
  const { posts, setPosts } = useContext(PostContext);

  const toggleLike = (postID) => {
    fetchApi({ type: 'TOGGLE_LIKE', postID }).then((likes) => {
      const index = posts.findIndex(({ _id }) => _id === postID);
      posts[index].likes = likes;
      setPosts([...posts]);
    });
  };

  return (
    <>
      {posts.map(({ postBy: author, ...news }) => {
        return (
          <div className="news-feed" key={news._id}>
            <div className="user">
              <Username user={author} />
            </div>
            <div className="post">
              <div className="post__content">{news.content}</div>
              <ImageSlider media={news.photos} src="media" />
            </div>
            <div className="post__footer">
              <div className="post__time">
                <Moment date={news.postAt} interval={1000} fromNow />
              </div>
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

export default Posts;
