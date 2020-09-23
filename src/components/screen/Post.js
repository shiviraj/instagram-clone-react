import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import fetchApi from '../../api/fetchApi';
import Moment from 'react-moment';
import ImageSlider from '../utils/ImageSlider';
import UserContext from '../../context/UserContext';
import Username from '../user/Username';
import PostComment from '../post/PostComment';

const Post = ({ match }) => {
  console.log(match);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchApi({ type: 'GET_POST', id: match.params.id }).then((result) => {
      setPost(result);
      setIsLoading(false);
    });
  }, []);

  const toggleLike = (e) => {
    fetchApi({ type: 'TOGGLE_LIKE', postID: post._id }).then((likes) => {
      post.likes = likes;
      setPost({ ...post });
    });
  };

  if (isLoading) return <></>;

  return (
    <div className="post-one">
      <div className="news-feed">
        <div className="post__header">
          <div className="user">
            <Username user={post.postBy} />
          </div>
          <div className="post">
            <div className="post__content">{post.content}</div>
            <ImageSlider media={post.photos} src="media" />
          </div>
        </div>
        <div className="post__footer">
          <PostComment post={post} />
          <div className="post__time">
            <Moment date={post.postAt} interval={1000} fromNow />
          </div>
          <div className="responses">
            <div
              onClick={toggleLike}
              className={post.likes.includes(user._id) ? 'liked' : 'like'}
            ></div>
            <NavLink to={`/post/${post._id}`} className="comment" />
          </div>
          <div className="total-likes">{post.likes.length} likes</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
