import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';
import ImageSlider from '../utils/ImageSlider';
import PostContext from '../../context/PostContext';
import UserContext from '../../context/UserContext';
import Username from '../user/Username';
import fetchApi from '../../api/fetchApi';
import PostComment from './PostComment';

const Posts = () => {
  const { posts, setPosts } = useContext(PostContext);
  const { user } = useContext(UserContext);

  const toggleLike = (postID) => {
    fetchApi({ type: 'TOGGLE_LIKE', postID }).then((likes) => {
      const index = posts.findIndex(({ _id }) => _id === postID);
      posts[index].likes = likes;
      setPosts([...posts]);
    });
  };

  return (
    <>
      {posts.map(({ postBy: author, ...post }) => {
        return (
          <div className="news-feed" key={post._id}>
            <div className="user">
              <Username user={author} />
            </div>
            <div className="post">
              <div className="post__content">{post.content}</div>
              <ImageSlider media={post.photos} src="media" />
            </div>
            <div className="post__footer">
              <div className="post__time">
                <Moment date={post.postAt} interval={1000} fromNow />
              </div>
              <div className="responses">
                <div
                  onClick={() => toggleLike(post._id)}
                  className={post.likes.includes(user._id) ? 'liked' : 'like'}
                ></div>
                <NavLink to={`/post/${post._id}`} className="comment" />
              </div>
              <div className="total-likes">{post.likes.length} likes</div>
              <PostComment post={post} visible="3" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
