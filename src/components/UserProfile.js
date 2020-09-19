import React, { useEffect, useState } from 'react';
import avatar from '../icons/avatar.png';
import fetchApi from '../api/fetchApi';
import ImageSlider from './ImageSlider';

const UserProfile = () => {
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    fetchApi({ type: 'MY_POSTS' }).then((posts) => setMyPosts(posts));
  }, []);

  return (
    <div className="profile-container">
      <div className="profile__header">
        <div className="profile__avatar">
          <img src={avatar} />
        </div>
        <div className="user-details">
          <div className="row user-info">
            <div>shiviraj</div>
            <div className="edit-profile">Edit Profile</div>
          </div>
          <div className="row">
            <div>47 posts</div>
            <div>255 followers</div>
            <div>251 following</div>
          </div>
          <div className="row">
            <div>Shivam Rajput</div>
          </div>
        </div>
      </div>
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
