import React, { useState, useEffect } from 'react';
import fetchApi from '../api/fetchApi';

const Oauth = () => {
  const [clientID, setClientID] = useState('');

  useEffect(() => {
    fetchApi({ type: 'GET_CLIENT_ID' }).then((data) =>
      setClientID(data.clientID)
    );
  }, []);

  return (
    <div className="o-auth">
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${clientID}`}
      >
        Sign in with Github
      </a>
    </div>
  );
};

export default Oauth;
