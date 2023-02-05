import React, { useEffect, useState } from "react";
import { Banner } from "./components/molecules";
import { Profile } from "./components/organisms";
import "./App.css";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  query,
  getDoc,
  setDoc,
  doc,
  docSnap,
} from "firebase/firestore";

async function App() {
  const databaseUrl =
    "https://basic-2b961-default-rtdb.asia-southeast1.firebasedatabase.app";

  const [people, setPeople] = useState();
  const [total, setTotal] = useState();

  const docRef = doc(db, "basic", "cards");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }

  // useEffect(() => {
  //   fetch(`${databaseUrl}/cards.json`, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => {
  //       if (res.status !== 200) {
  //         throw new Error(res.statusText);
  //       }
  //       return res.json();
  //     })
  //     .then((cards) => setPeople({ cards: cards }));

  //   fetch(`${databaseUrl}/total.json`, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => {
  //       if (res.status !== 200) {
  //         throw new Error(res.statusText);
  //       }
  //       return res.json();
  //     })
  //     .then((total) => setTotal(total.totalCnt));
  // }, []);

  // useEffect(() => {
  //   fetch(`https://cors-anywhere.herokuapp.com/${databaseUrl}/total.json`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       totalCnt: total,
  //     }),
  //   });
  // }, [total]);

  return (
    <div className="App">
      {total && <Banner totalCnt={total} />}
      {people && (
        <>
          {people.cards.map((id, index) => (
            <Profile
              key={index}
              id={id.id}
              url={id.url}
              des={id.des}
              name={id.name}
              job={id.job}
              isNew={id.isNew}
              totalSet={setTotal}
              like={id.like}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
