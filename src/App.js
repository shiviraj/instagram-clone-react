import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import UserContext from './context/UserContext';
import fetchApi from './api/fetchApi';

const User = () => {
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    fetchApi({ type: 'GET_USER' })
      .then((loggedUser) => setUser(loggedUser))
      .catch(() => history.push('/signup'));
  }, []);

  return <></>;
};

const AppRoute = () => {
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <User />
        {user && <Header />}
        <AppRoutes />
      </Router>
    </UserContext.Provider>
  );
};

export default AppRoute;
