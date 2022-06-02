import { FunctionComponent } from 'react';
import Style from './ButtonSubmit.module.css';

interface Props {
  type: 'button' | 'submit' | 'reset';
  onClick: (e: React.MouseEvent) => void;
}

const ButtonSubmit: FunctionComponent<Props> = ({ type, onClick }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={Style.ButtonSubmit} onClick={onClick}>
      submit
    </button>
  );
};

export default ButtonSubmit;
