import React, { useState } from 'react';

const FormInput = ({ type, onChange, label }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange(inputValue);
  };

  return (
    <div className="input">
      <label>{label}</label>
      <input type={type} onChange={handleChange} value={value} required />
    </div>
  );
};

export default FormInput;
