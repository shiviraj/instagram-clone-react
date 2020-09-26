import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/screen/Home';
import NewPostModal from '../components/screen/NewPostModal';
import Post from '../components/screen/Post';

const HomeRoute = () => {
  return (
    <>
      <Home />
      <Switch>
        <Route path="/createPost">
          <NewPostModal />
        </Route>
        <Route path="/post/:id" render={(props) => <Post {...props} />} />
      </Switch>
    </>
  );
};

export default HomeRoute;
