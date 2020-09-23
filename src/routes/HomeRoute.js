import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../components/screen/Home';
import NewPostModal from '../components/screen/NewPostModal';

const HomeRoute = () => {
  return (
    <PrivateRoute path="/">
      <Home />
      <Switch>
        <Route path="/createPost">
          <NewPostModal />
        </Route>
      </Switch>
    </PrivateRoute>
  );
};

export default HomeRoute;
