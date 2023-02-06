import React, { useState } from "react";
import "./App.css";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseXY = (e) => {
    setX((prev) => e.clientX);
    setY((prev) => e.clientY);
  };

  return (
    <div
      className="MainContainer"
      onPointerMove={(e) => {
        mouseXY(e);
      }}>
      <div
        className="moveContaier"
        style={{ transform: `translate(${x}px, ${y}px)` }}></div>
    </div>
  );
}

export default App;
