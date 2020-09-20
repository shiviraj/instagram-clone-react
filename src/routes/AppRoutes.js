import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import UserProfile from '../components/UserProfile';
import EditProfile from '../components/EditProfile';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
  return (
    <div className="body">
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/" component={Home} exact />
        <Route path="/profile/:user" component={UserProfile} exact />
        <Route path="/profile/:user/edit" component={EditProfile} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
