import React, { useEffect, useState } from "react";
import { Banner } from "./components/molecules";
import { Profile } from "./components/organisms";
import "./App.css";
import { db } from "./firebase";
import {
  getDoc,
  doc,
  updateDoc,
  query,
  collection,
  getDocs,
} from "firebase/firestore";

function App() {
  const [people, setPeople] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    async function roadLikeData() {
      const Ref = query(collection(db, "cards"));
      const Snap = await getDocs(Ref);
      const data = [];
      Snap.forEach((doc) => {
        data.push(doc.data());
      });
      setPeople(data);
    }

    async function roadTotalData() {
      const Ref = doc(db, "total", "total");
      const Snap = await getDoc(Ref);
      setTotal(Number(Object.values(Snap.data())));
    }

    roadLikeData();
    roadTotalData();
  }, []);

  useEffect(() => {
    async function updateData() {
      const totalUpdate = doc(db, "total", "total");
      await updateDoc(totalUpdate, {
        totalCnt: total,
      });
    }
    updateData();
  }, [total]);

  return (
    <div className="App">
      {total && <Banner totalCnt={total} />}
      {people && (
        <>
          {people.map((item, index) => (
            <Profile
              key={index}
              id={item.id}
              url={item.url}
              des={item.des}
              name={item.name}
              job={item.job}
              isNew={item.isNew}
              totalSet={setTotal}
              like={item.like}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
