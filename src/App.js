import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';

const AppRoute = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};

export default AppRoute;
