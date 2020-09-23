import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Logo from '../header/Logo';
import Oauth from '../user/Oauth';
import FormInput from '../utils/FormInput';
import useAvailableUsername from '../../hooks/useAvailableUsername';
import useAvailableEmail from '../../hooks/useAvailableEmail';
import fetchApi from '../../api/fetchApi';

const SignUp = () => {
  const history = useHistory();
  const { username, isAvailable, handleUsername } = useAvailableUsername();
  const { email, isAvailableEmail, handleEmail } = useAvailableEmail();
  const [name, setName] = useState('');
  const [password, setPwd] = useState('');
  const [cnfPwd, setCnfPwd] = useState('');
  const [error, setError] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cnfPwd !== password) return setError('Password not matched!!');
    fetchApi({ type: 'SIGN_UP', data: { username, email, name, password } })
      .then(() => history.push('/'))
      .catch(() => setError('Something went wrong, try again!!'));
  };

  return (
    <div className="container">
      <div className="signup-container">
        <Logo />
        <Oauth />
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="error">{error ? error : ''}</div>
            <FormInput
              type="email"
              label="Email"
              onChange={handleEmail}
              className={isAvailableEmail ? 'available' : 'not-available'}
            />
            <FormInput type="text" label="Full Name" onChange={setName} />
            <FormInput
              type="text"
              label="Username"
              onChange={handleUsername}
              className={isAvailable ? 'available' : 'not-available'}
            />
            <FormInput type="password" label="Password" onChange={setPwd} />
            <FormInput
              type="password"
              label="Confirm Password"
              onChange={setCnfPwd}
            />
            <div className="submit">
              <button disabled={!isAvailable || !isAvailableEmail}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="alternate">
        <span>Have an Account? </span>
        <NavLink to="/login"> Log In</NavLink>
      </div>
    </div>
  );
};

export default SignUp;
