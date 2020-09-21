import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import UserProfile from '../components/UserProfile';
import EditProfile from '../components/EditProfile';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import OAuthRedirection from '../components/OAuthRedirection';

const AppRoutes = () => {
  return (
    <div className="body">
      <Switch>
        <PublicRoute path="/login" component={Login} exact />
        <PublicRoute path="/signup" component={SignUp} exact />
        <Route path="/oauth" component={OAuthRedirection} exact />
        <PrivateRoute path="/" component={Home} exact />
        <PrivateRoute path="/profile/:user" component={UserProfile} exact />
        <PrivateRoute
          path="/profile/:user/edit"
          component={EditProfile}
          exact
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
