import { FunctionComponent, ReactEventHandler, useEffect, useState, useCallback } from 'react';
import Style from './Modal.module.css';

interface Props {
  btnValue: string;
  content: string;
}

const Modal: FunctionComponent<Props> = ({ btnValue, content }) => {
  const [isOpen, setIsOpen] = useState<string>('Blind');

  const handleOpen = () => {
    setIsOpen('Show');
  };

  const handleClose: ReactEventHandler = (e): void => {
    if (e.target === e.currentTarget) {
      setIsOpen('BlindIng');
      setTimeout(() => setIsOpen('Blind'), 300);
    }
  };

  const isView = () => {
    if (isOpen === 'BlindIng') {
      return (
        <button
          type="button"
          className={Style.ModalBackgroundBlindIng}
          onClick={(e) => {
            handleClose(e);
          }}
        >
          <div className={Style.ModalMainBlindIng}>
            <h1>{content}</h1>
          </div>
        </button>
      );
    }
    if (isOpen === 'Show') {
      return (
        <button
          type="button"
          className={Style.ModalBackgroundShow}
          onClick={(e) => {
            handleClose(e);
          }}
        >
          <div className={Style.ModalMainShow}>
            <h1>{content}</h1>
          </div>
        </button>
      );
    }
    return null;
  };

  return (
    <>
      <button className={Style.Btn} type="button" onClick={handleOpen}>
        {btnValue}
      </button>
      {isView()}
    </>
  );
};

export default Modal;
