import { FunctionComponent, useState } from 'react';
import Style from './Navbar.module.css';
import { ModalBtn } from '@/components/atoms';
import { Modal } from '@/components/molecules';

type isOpen = boolean;

const Navbar: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<isOpen>(false);

  return (
    <>
      <div className={Style.test}>
        <h1>hello</h1>

        <ModalBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      {isOpen && (
        <div>
          <Modal setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  );
};

export default Navbar;
