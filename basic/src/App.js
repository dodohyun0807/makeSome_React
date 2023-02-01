import { Profile } from "./components/organisms";
import "./App.css";

function App() {
  const people = [
    {
      url: "https://cdn.mhnse.com/news/photo/202211/156007_150435_2723.jpg",
      des: "카리나",
      name: "카리나",
      job: "가수",
      isNew: true,
    },
    {
      url: "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/04/29/0adb0b65-4976-4fdd-96bb-c0be1c558637.jpg",
      des: "이주빈",
      name: "이주빈",
      job: "배우",
      isNew: false,
    },
    {
      url: "https://img.hankyung.com/photo/202103/03.21325653.1.jpg",
      des: "설인아",
      name: "설인아",
      job: "배우",
      isNew: true,
    },
  ];

  return (
    <div className="App">
      {people.map((id, index) => (
        <Profile
          key={index}
          url={id.url}
          des={id.des}
          name={id.name}
          job={id.job}
          isNew={id.isNew}
        />
      ))}
    </div>
  );
}

export default App;
