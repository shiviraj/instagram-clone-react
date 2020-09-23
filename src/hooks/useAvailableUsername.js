import { useState } from 'react';
import fetchApi from '../api/fetchApi';

const useAvailableUser = (user = {}) => {
  const [username, setUsername] = useState(user.username || '');
  const [isAvailable, setIsAvailable] = useState(true);

  const handleUsername = (data) => {
    setUsername(data);
    const option = { type: 'IS_AVAILABLE_USERNAME', data: { username: data } };
    fetchApi(option).then(({ result }) => setIsAvailable(result));
  };

  return { username, isAvailable, handleUsername };
};

export default useAvailableUser;
