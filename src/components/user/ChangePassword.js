import React, { useState, useEffect } from 'react';
import FormInput from '../utils/FormInput';
import fetchApi from '../../api/fetchApi';

const ChangePassword = () => {
  const [oldPwd, setOldPwd] = useState('');
  const [pwd, setPwd] = useState('');
  const [cnfPwd, setCnfPwd] = useState('');
  const [res, setRes] = useState({});

  useEffect(() => {
    setTimeout(() => setRes({}), 8000);
  }, [res]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pwd !== cnfPwd)
      return setRes({ state: 'error', msg: 'Both Password not matched' });
    const data = { oldPwd, pwd };
    fetchApi({ type: 'CHANGE_PASSWORD', data })
      .then(() =>
        setRes({ state: 'success', msg: 'Successfully changed password' })
      )
      .catch(() => setRes({ state: 'error', msg: 'Something went wrong!!' }));
  };

  return (
    <div className="change-password">
      <div className="title">Change Password</div>
      <div className={`${res.state} res`}>{res.msg}</div>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="password"
          value={oldPwd}
          label="Old Password"
          onChange={setOldPwd}
          required={false}
        />
        <FormInput
          type="password"
          value={pwd}
          label="New Password"
          onChange={setPwd}
        />
        <FormInput
          type="password"
          value={cnfPwd}
          label="Confirm New Password"
          onChange={setCnfPwd}
        />
        <div className="submit">
          <button>Change Password</button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
