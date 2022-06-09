import { Navbar } from '@/components/organisms';
import Style from './index.module.css';

const Home = () => {
  return (
    <div className={Style.MainContainer}>
      <Navbar />
    </div>
  );
};

export default Home;
