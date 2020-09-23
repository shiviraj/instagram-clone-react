import { useState } from 'react';
import fetchApi from '../api/fetchApi';

const useAvailableEmail = (user = {}) => {
  const [email, setEmail] = useState(user.email || '');
  const [isAvailableEmail, setIsAvailableEmail] = useState(true);

  const handleEmail = (data) => {
    setEmail(data);
    const option = { type: 'IS_AVAILABLE_EMAIL', data: { email: data } };
    fetchApi(option).then(({ result }) => setIsAvailableEmail(result));
  };

  return { email, isAvailableEmail, handleEmail };
};

export default useAvailableEmail;
