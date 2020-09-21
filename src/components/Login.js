import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../icons/logo.png';
import Oauth from './Oauth';
import FormInput from './FormInput';
import fetchApi from '../api/fetchApi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPwd] = useState('');
  const [error, setError] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi({ type: 'SIGN_IN', data: { email, password } })
      .then(() => setError(undefined))
      .catch(() => setError('Something went wrong, try again!!'));
  };

  return (
    <div className="container">
      <div className="signup-container">
        <div className="logo">
          <img src={logo} />
        </div>
        <Oauth />
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="error">{error ? error : ''}</div>
            <FormInput type="email" label="Email" onChange={setEmail} />
            <FormInput type="password" label="Password" onChange={setPwd} />
            <div className="submit">
              <button>Log In</button>
            </div>
          </form>
        </div>
      </div>
      <div className="alternate">
        <span>Don't have an Account? </span>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </div>
  );
};

export default Login;
