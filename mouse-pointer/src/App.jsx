import React from "react";
import "./App.css";
import Card from "./Card";

const App = () => {
  return (
    <div className="MainContainer">
      <Card>
        <h1>안녕하세요</h1>
        <p>첫 번째 카드</p>
      </Card>
      <Card>
        <h1>안녕하세요</h1>
        <p>두 번째 카드</p>
      </Card>
      <Card>
        <h1>안녕하세요</h1>
        <p>세 번째 카드</p>
      </Card>
      <Card>
        <h1>안녕하세요</h1>
        <p>네 번째 카드</p>
      </Card>
    </div>
  );
};

export default App;
