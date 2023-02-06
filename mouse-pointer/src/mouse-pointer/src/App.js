import React, { useState } from "react";
import "./App.css";

function App() {
  const [xy, setXY] = useState({ x: 0, y: 0 });

  const mouseXY = (e) => {
    setXY((prev) => ({ x: e.clientX, y: e.clientY }));
  };

  return (
    <div
      className="MainContainer"
      onPointerMove={(e) => {
        mouseXY(e);
      }}>
      <div
        className="moveContaier"
        style={{ transform: `translate(${xy.x}px, ${xy.y}px)` }}></div>
    </div>
  );
}

export default App;
