import React, { FunctionComponent } from 'react';
import Style from './Textarea.module.css';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  form?: string;
  minLength?: number;
}

const Textarea: FunctionComponent<Props> = ({ value, onChange, placeholder, form, minLength }) => {
  return (
    <textarea
      className={Style.Textarea}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={1}
      form={form}
      minLength={minLength}
    />
  );
};

export default Textarea;
