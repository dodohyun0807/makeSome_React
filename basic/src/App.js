import React, { useEffect, useState } from "react";
import { Banner } from "./components/molecules";
import { Profile } from "./components/organisms";
import "./App.css";

function App() {
  const people = [
    {
      id: 1,
      url: "https://cdn.mhnse.com/news/photo/202211/156007_150435_2723.jpg",
      des: "카리나",
      name: "카리나",
      job: "가수",
      isNew: true,
    },
    {
      id: 2,
      url: "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/04/29/0adb0b65-4976-4fdd-96bb-c0be1c558637.jpg",
      des: "이주빈",
      name: "이주빈",
      job: "배우",
      isNew: false,
    },
    {
      id: 3,
      url: "https://img.hankyung.com/photo/202103/03.21325653.1.jpg",
      des: "설인아",
      name: "설인아",
      job: "배우",
      isNew: true,
    },
  ];

  const localStorage = window.localStorage;
  const [total, setTotal] = useState(
    Number(localStorage.getItem("total")) || 0
  );

  useEffect(() => {
    localStorage.setItem("total", total);
  }, [total]);

  return (
    <div className="App">
      <Banner totalCnt={total} />
      {people.map((id) => (
        <Profile
          key={id.id}
          id={id.id}
          url={id.url}
          des={id.des}
          name={id.name}
          job={id.job}
          isNew={id.isNew}
          totalSet={setTotal}
        />
      ))}
    </div>
  );
}

export default App;
