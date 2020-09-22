import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import FormInput from '../utils/FormInput';
import fetchApi from '../../api/fetchApi';

const EditUser = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [res, setRes] = useState({});

  useEffect(() => {
    setTimeout(() => setRes({}), 8000);
  }, [res]);

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
          onChange={setUsername}
        />
        <FormInput
          type="email"
          label="email"
          value={email}
          onChange={setEmail}
        />
        <FormInput type="text" label="name" value={name} onChange={setName} />
        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
