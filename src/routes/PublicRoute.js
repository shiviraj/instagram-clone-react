import React, { useState, useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../context/UserContext';
import fetchApi from '../api/fetchApi';

const getUser = async (setUser, setIsAuthenticated, setIsLoading) => {
  try {
    const user = await fetchApi({ type: 'GET_USER' });
    setUser(user);
    setIsAuthenticated(true);
  } catch (err) {
    setIsAuthenticated(false);
  }
  setIsLoading(false);
};

const PublicRoute = ({ component: Component, ...rest }) => {
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
