import React, { useEffect, useState, useContext } from 'react';
import fetchApi from '../api/fetchApi';
import ImageSlider from './ImageSlider';
import UserContext from '../context/UserContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    fetchApi({ type: 'MY_POSTS', payload: user }).then((posts) =>
      setMyPosts(posts)
    );
  }, [user]);

  return (
    <div className="profile-container">
      {user && (
        <div className="profile__header">
          <div className="profile__avatar">
            <img src={`/images/${user.avatar}`} />
          </div>
          <div className="user-details">
            <div className="row user-info">
              <div>{user.username}</div>
              <div className="edit-profile">Edit Profile</div>
            </div>
            <div className="row">
              <div>{myPosts.length} posts</div>
              <div>{user.followers.length} followers</div>
              <div>{user.following.length} following</div>
            </div>
            <div className="row">
              <div>{user.name}</div>
            </div>
          </div>
        </div>
      )}
      <div className="profile__body">
        {myPosts.map((post) => {
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
