import React, { useState, useContext, useEffect } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import logo from '../icons/logo.png';
import FormInput from './FormInput';
import fetchApi from '../api/fetchApi';
import UserContext from '../context/UserContext';

const Login = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    user && history.push('/');
  }, [user]);

  const [email, setEmail] = useState('');
  const [password, setPwd] = useState('');
  const [error, setError] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi({ type: 'SIGN_IN', data: { email, password } })
      .then((loggedUser) => {
        history.push('/');
        setUser(loggedUser);
      })
      .catch(() => setError('Something went wrong, try again!!'));
    setError(undefined);
  };

  return (
    <div className="container">
      <div className="signup-container">
        <div className="logo">
          <img src={logo} />
        </div>
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
