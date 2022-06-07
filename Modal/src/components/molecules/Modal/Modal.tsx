import { FunctionComponent, ReactEventHandler, useState } from 'react';
import { Textarea, ButtonSubmit, Input } from '@/components/atoms';
import { useChange } from '@/hooks';
import Style from './Modal.module.css';

interface Props {
  btnValue: string;
  content: string;
}

const Modal: FunctionComponent<Props> = ({ btnValue, content }) => {
  const [isOpen, setIsOpen] = useState<string>('Blind');
  const [idValue, setIdValue, onIdValueChange] = useChange('');
  const [passwordValue, setPasswordIdValue, onPasswordValueChange] = useChange('');

  const handleOpen = (): void => {
    setIsOpen('Show');
    setIdValue('');
    setPasswordIdValue('');
  };

  const handleClose: ReactEventHandler = (e): void => {
    if (e.target === e.currentTarget) {
      setIsOpen('BlindIng');
      setTimeout(() => setIsOpen('Blind'), 300);
    }
  };

  const submitInfo = (): void => {
    console.log(idValue);
    console.log(passwordValue);
    setIdValue('');
    setPasswordIdValue('');
  };

  const isView = () => {
    if (isOpen === 'BlindIng') {
      return (
        <div
          className={Style.ModalBackgroundShow}
          role="button"
          onClick={(e) => {
            handleClose(e);
          }}
          onKeyDown={(e) => {
            handleClose(e);
          }}
          tabIndex={0}
        >
          <div className={Style.ModalMainBlindIng}>
            <h1>{content}</h1>
            <form className={Style.FormContainer}>
              <Input value={idValue} onChange={onIdValueChange} type="text" placeholder="Id" />
              <Input
                value={passwordValue}
                onChange={onPasswordValueChange}
                type="password"
                placeholder="PassWord"
              />
              <ButtonSubmit type="submit" onClick={submitInfo} />
            </form>
          </div>
        </div>
      );
    }
    if (isOpen === 'Show') {
      return (
        <div
          className={Style.ModalBackgroundShow}
          role="button"
          onClick={(e) => {
            handleClose(e);
          }}
          onKeyDown={(e) => {
            handleClose(e);
          }}
          tabIndex={0}
        >
          <div className={Style.ModalMainShow}>
            <h1>{content}</h1>
            <form className={Style.FormContainer}>
              <Input value={idValue} onChange={onIdValueChange} type="text" placeholder="Id" />
              <Input
                value={passwordValue}
                onChange={onPasswordValueChange}
                type="password"
                placeholder="PassWord"
              />
              <ButtonSubmit type="submit" onClick={submitInfo} />
            </form>
          </div>
        </div>
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
