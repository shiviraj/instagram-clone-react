import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import FormInput from '../utils/FormInput';
import fetchApi from '../../api/fetchApi';
import useAvailableUsername from '../../hooks/useAvailableUsername';
import useAvailableEmail from '../../hooks/useAvailableEmail';

const EditUser = () => {
  const { user, setUser } = useContext(UserContext);
  const { username, isAvailable, handleUsername } = useAvailableUsername(user);
  const { email, isAvailableEmail, handleEmail } = useAvailableEmail(user);
  const [name, setName] = useState(user.name);
  const [res, setRes] = useState({});

  useEffect(() => {
    const timeoutID = setTimeout(() => setRes({}), 8000);
    return () => clearTimeout(timeoutID);
  }, [res]);

  const isValidUsername = isAvailable || username === user.username;
  const usernameClass = isValidUsername ? 'available' : 'not-available';

  const isValidEmail = isAvailableEmail || email === user.email;
  const emailClass = isValidEmail ? 'available' : 'not-available';

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { username, email, name };
    fetchApi({ type: 'CHANGE_PROFILE', data })
      .then((changedUser) => {
        setUser(changedUser);
        setRes({ msg: 'Successfully Updated', state: 'success' });
      })
      .catch(() => setRes({ msg: 'something went wrong', state: 'error' }));
  };

  return (
    <div className="edit-user">
      <div className="title">Edit Profile</div>
      <div className={`${res.state} res`}>{res.msg}</div>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="username"
          value={username}
          onChange={handleUsername}
          className={usernameClass}
        />
        <FormInput
          type="email"
          label="email"
          value={email}
          onChange={handleEmail}
          className={emailClass}
        />
        <FormInput type="text" label="name" value={name} onChange={setName} />
        <div className="submit">
          <button disabled={!isValidEmail || !isValidUsername}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
