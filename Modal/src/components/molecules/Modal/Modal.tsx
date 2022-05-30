import { FunctionComponent, ReactEventHandler, SetStateAction, Dispatch } from 'react';
import Style from './Modal.module.css';

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal: FunctionComponent<Props> = ({ setIsOpen }) => {
  const handleClose: ReactEventHandler = (e): void => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  return (
    <button
      type="button"
      className={Style.Background}
      onClick={(e) => {
        handleClose(e);
      }}
    >
      <div className={Style.MainContainer}>
        <h1>hello!</h1>
      </div>
    </button>
  );
};

export default Modal;
