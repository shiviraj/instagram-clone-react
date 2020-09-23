import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import FormInput from '../utils/FormInput';
import UserContext from '../../context/UserContext';
import { User } from '../user/Username';
import fetchApi from '../../api/fetchApi.js';

const PostComment = ({ post, visible }) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState('');

  const uploadComment = (e) => {
    e.preventDefault();
    if (!comment) return;
    fetchApi({ type: 'COMMENT', data: { comment, postID: post._id } }).then(
      (result) => {
        post.comments = [...post.comments, result];
        setComment('');
      }
    );
  };

  const myComments = post.comments.filter(
    ({ commentBy }) => user._id === commentBy._id
  );

  const othersComments = post.comments.filter(
    ({ commentBy }) => user._id !== commentBy._id
  );

  const allComments = [...myComments, ...othersComments];

  return (
    <div className="all-comments">
      <div className="comments-container">
        <NavLink to={`/post/${post._id}`} className="comment">
          <div className="total-comments">
            View all {post.comments.length} comments
          </div>
        </NavLink>
        {allComments.slice(0, visible).map((cmt, index) => {
          return (
            <div key={cmt.msg + index} className="comment">
              <User user={cmt.commentBy} />
              <div className="comment-msg">{cmt.msg}</div>
            </div>
          );
        })}
      </div>
      <form onSubmit={uploadComment}>
        <FormInput
          type="text"
          placeholder="Add new comment ..."
          value={comment}
          onChange={setComment}
        />
        <div className="submit">
          <button disabled={!comment}>Post</button>
        </div>
      </form>
    </div>
  );
};

export default PostComment;
