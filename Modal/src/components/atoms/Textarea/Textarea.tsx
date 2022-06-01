import React, { FunctionComponent } from 'react';
import Style from './Textarea.module.css';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: FunctionComponent<Props> = ({ value, onChange }) => {
  return <textarea className={Style.Textarea} value={value} onChange={onChange} />;
};

export default Textarea;
