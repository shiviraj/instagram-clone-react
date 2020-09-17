import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRoutes;
