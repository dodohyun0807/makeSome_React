import {Profile} from './components/Profile'
import './App.css';

function App() {
  return (
    <div className="App">
      < Profile url='https://cdn.mhnse.com/news/photo/202211/156007_150435_2723.jpg' des='카리나' name='카리나' job='가수'/>
      < Profile url='https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/04/29/0adb0b65-4976-4fdd-96bb-c0be1c558637.jpg' des='이주빈' name='이주빈' job='배우'/>
      < Profile url='https://img.hankyung.com/photo/202103/03.21325653.1.jpg' des='설인아' name='설인아' job='배우'/>
    </div>
  );
}

export default App;
