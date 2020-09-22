import React, { useState } from 'react';

const FormInput = ({ onChange, label, value, ...props }) => {
  const [text, setValue] = useState(value || '');
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange(inputValue);
  };

  return (
    <div className="input">
      <label>{label}</label>
      <input onChange={handleChange} value={text} required {...props} />
    </div>
  );
};

export default FormInput;
