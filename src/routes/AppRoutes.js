import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/screen/Home';
import UserProfile from '../components/screen/UserProfile';
import EditProfile from '../components/screen/EditProfile';
import NotFound from '../components/screen/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../components/screen/Login';
import SignUp from '../components/screen/SignUp';
import OAuthRedirection from '../components/screen/OAuthRedirection';

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
