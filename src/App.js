import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import UserContext from './context/UserContext';

const AppRoute = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        {user && <Header />}
        <AppRoutes />
      </Router>
    </UserContext.Provider>
  );
};

export default AppRoute;
