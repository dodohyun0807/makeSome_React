import { FunctionComponent, MouseEventHandler, ReactEventHandler, useState } from 'react';
import { Textarea, ButtonSubmit, Input } from '@/components/atoms';
import { useChange } from '@/hooks';
import Style from './LogInModal.module.css';

const LogInModal: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<string>('Blind');
  const [idValue, setIdValue, onIdValueChange] = useChange('');
  const [passwordValue, setPasswordIdValue, onPasswordValueChange] = useChange('');
  const [nameValue, setNameIdValue, onNameValueChange] = useChange('');

  const handleOpen = (state: string): void => {
    setIsOpen(state);
  };

  const handleClose: ReactEventHandler = (e): void => {
    if (e.target === e.currentTarget) {
      setIdValue('');
      setPasswordIdValue('');
      setNameIdValue('');
      setIsOpen('BlindIng');
      setTimeout(() => setIsOpen('Blind'), 300);
    }
  };

  const submitInfo = (): void => {
    setIsOpen('Blind');
    setIdValue('');
    setPasswordIdValue('');
    setNameIdValue('');
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
          <div className={Style.ModalMainBlindIng} />
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
            <h1>LogIn</h1>
            <form className={Style.FormContainer}>
              <Input value={idValue} onChange={onIdValueChange} type="text" placeholder="Id" />
              <Input
                value={passwordValue}
                onChange={onPasswordValueChange}
                type="password"
                placeholder="PassWord"
              />
              <div className={Style.ButtonContainer}>
                <ButtonSubmit type="button" onClick={() => handleOpen('SingUp')} value="SingUp" />
                <ButtonSubmit type="submit" onClick={submitInfo} value="LogIn" />
              </div>
            </form>
          </div>
        </div>
      );
    }
    if (isOpen === 'SingUp') {
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
            <h1>SignUp</h1>
            <form className={Style.FormContainer}>
              <Input value={idValue} onChange={onIdValueChange} type="text" placeholder="Id" />
              <Input
                value={passwordValue}
                onChange={onPasswordValueChange}
                type="password"
                placeholder="PassWord"
              />
              <Input
                value={nameValue}
                onChange={onNameValueChange}
                type="text"
                placeholder="Name"
              />
              <div className={Style.ButtonContainer}>
                <ButtonSubmit type="button" onClick={() => handleOpen('Show')} value="Back" />
                <ButtonSubmit type="submit" onClick={submitInfo} value="Submit" />
              </div>
            </form>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <button className={Style.Btn} type="button" onClick={() => handleOpen('Show')}>
        LogIn
      </button>
      {isView()}
    </>
  );
};

export default LogInModal;
