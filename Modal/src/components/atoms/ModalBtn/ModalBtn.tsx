import { FunctionComponent, ReactEventHandler, SetStateAction, Dispatch } from 'react';
import Style from './ModalBtn.module.css';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalBtn: FunctionComponent<Props> = ({ isOpen, setIsOpen }) => {
  const modalHandler: ReactEventHandler = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <button className={Style.Btn} type="button" onClick={modalHandler}>
      open
    </button>
  );
};

export default ModalBtn;
