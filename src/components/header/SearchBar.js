import React, { useState, useEffect } from 'react';
import FormInput from '../utils/FormInput';
import fetchApi from '../../api/fetchApi';
import Username from '../user/Username';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [users, setUsers] = useState([]);

  const handleChange = (username) => {
    setValue(username);
    fetchApi({ type: 'GET_USERS', username })
      .then((result) => setUsers(result))
      .catch((e) => setUsers([]));
  };

  // useEffect(() => {
  //   // setValue('');
  // }, [users]);

  const clearSearch = () => setUsers([]);

  return (
    <div className="search-bar">
      <FormInput
        placeholder="search..."
        value={value}
        onChange={handleChange}
      />
      <div className={`users-container ${value ? 'input-value' : ''}`}>
        <div className="users">
          {users.map((user) => {
            return (
              <div key={user.username} className="user" onClick={clearSearch}>
                <Username user={user} />
                <div className="name">{user.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
