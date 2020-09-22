import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Logo from '../header/Logo';
import Oauth from '../user/Oauth';
import FormInput from '../utils/FormInput';
import fetchApi from '../../api/fetchApi';

const SignUp = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPwd] = useState('');
  const [cnfPwd, setCnfPwd] = useState('');
  const [error, setError] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cnfPwd !== password) {
      return setError('Password not matched!!');
    }
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
            <FormInput type="email" label="Email" onChange={setEmail} />
            <FormInput type="text" label="Full Name" onChange={setName} />
            <FormInput type="text" label="Username" onChange={setUsername} />
            <FormInput type="password" label="Password" onChange={setPwd} />
            <FormInput
              type="password"
              label="Confirm Password"
              onChange={setCnfPwd}
            />
            <div className="submit">
              <button>Sign Up</button>
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
