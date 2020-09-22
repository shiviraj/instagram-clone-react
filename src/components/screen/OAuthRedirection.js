import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import fetchApi from '../../api/fetchApi';

const Oauth = ({ location }) => {
  const history = useHistory();
  const [error, setError] = useState('');

  useEffect(() => {
    if (location && location.search.startsWith('?code=')) {
      const code = location.search.replace(/\?code=/g, '');
      fetchApi({ type: 'SIGN_IN_OAUTH', code })
        .then(() => history.push('/'))
        .catch(() => setError('Something went wrong!'));
    }
  }, []);

  return (
    <>
      {error && (
        <div>
          <span>{error} </span>
          <NavLink to="/login">Go to Login Page</NavLink>
        </div>
      )}
    </>
  );
};

export default Oauth;
