import React, { FunctionComponent } from 'react';
import Style from './Input.module.css';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?: string;
}

const Input: FunctionComponent<Props> = ({ value, onChange, type, placeholder }) => {
  return (
    <input
      className={Style.Input}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      autoComplete="on"
    />
  );
};

export default Input;
