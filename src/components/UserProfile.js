import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import fetchApi from '../api/fetchApi';
import ImageSlider from './ImageSlider';
import UserContext from '../context/UserContext';

const UserProfile = (props) => {
  const username = props.match.params.user;

  const { user } = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (user && username === user.username) {
      setCurrentUser(user);
    } else {
      fetchApi({ type: 'GET_USER', payload: user, username }).then((userData) =>
        setCurrentUser(userData)
      );
    }
  }, [user]);

  useEffect(() => {
    fetchApi({ type: 'USERS_POST', payload: user, username }).then((allPosts) =>
      setPosts(allPosts)
    );
  }, [currentUser]);

  return (
    <div className="profile-container">
      {currentUser && (
        <div className="profile__header">
          <div className="profile__avatar">
            <img src={`/images/${currentUser.avatar}`} />
          </div>
          <div className="user-details">
            <div className="row user-info">
              <div>{currentUser.username}</div>
              {currentUser._id === user._id && (
                <NavLink to={`/profile/${user.username}/edit`}>
                  <div className="edit-profile">Edit Profile</div>
                </NavLink>
              )}
            </div>
            <div className="row">
              <div>{posts.length} posts</div>
              <div>{currentUser.followers.length} followers</div>
              <div>{currentUser.following.length} following</div>
            </div>
            <div className="row">
              <div>{currentUser.name}</div>
            </div>
          </div>
        </div>
      )}
      <div className="profile__body">
        {posts.map((post) => {
          return (
            <div className="post" key={post._id}>
              <div className="content">{post.content}</div>
              <ImageSlider images={post.photos} />
              <div className="responses">
                <div>{post.likes.length} Likes</div>
                <div>0 Comments</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserProfile;
