import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import UserProfile from '../components/UserProfile';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
  return (
    <div className="body">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/profile/:user" component={UserProfile} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
