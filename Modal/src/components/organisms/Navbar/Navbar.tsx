import { FunctionComponent, memo } from 'react';
import Style from './Navbar.module.css';
import { LogInModal } from '@/components/molecules';

const Navbar: FunctionComponent = () => {
  return (
    <div className={Style.Maincontainer}>
      <h1>hello</h1>
      <LogInModal />
    </div>
  );
};

export default memo(Navbar);
