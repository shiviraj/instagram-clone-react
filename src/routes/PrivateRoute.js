import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../context/UserContext';
import fetchApi from '../api/fetchApi';

const getUser = async (setUser, setIsAuthenticated, setIsLoading) => {
  try {
    const user = await fetchApi({ type: 'GET_USER' });
    setUser(user);
  } catch (err) {
    setIsAuthenticated(false);
  }
  setIsLoading(false);
};

const AuthRoute = ({ component: Component, ...rest }) => {
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    getUser(setUser, setIsAuthenticated, setIsLoading);
  }, []);

  if (isLoading) {
    return <></>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default AuthRoute;
