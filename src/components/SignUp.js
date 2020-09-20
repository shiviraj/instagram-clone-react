import React, { useState, useEffect, useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import logo from '../icons/logo.png';
import FormInput from './FormInput';
import fetchApi from '../api/fetchApi';
import UserContext from '../context/UserContext';

const SignUp = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    user && history.push('/');
  }, [user]);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPwd, setCnfPwd] = useState('');
  const [error, setError] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cnfPwd !== password) {
      return setError('Password not matched!!');
    }
    fetchApi({
      type: 'SIGN_UP',
      data: { username, email, name, password },
    })
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
            <FormInput type="text" label="Full Name" onChange={setName} />
            <FormInput type="text" label="Username" onChange={setUsername} />
            <FormInput
              type="password"
              label="Password"
              onChange={setPassword}
            />
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
