import { FunctionComponent, memo } from 'react';
import Style from './Navbar.module.css';
import { Modal } from '@/components/molecules';

const Navbar: FunctionComponent = () => {
  return (
    <div className={Style.Maincontainer}>
      <h1>hello</h1>
      <Modal btnValue="Open" content="LogIn" />
    </div>
  );
};

export default memo(Navbar);
