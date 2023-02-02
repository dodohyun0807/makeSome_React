import React, { useState } from "react";
import { Button } from "../../atoms";
import "./LikeBox.css";
import heartSvg from "../../../asset/heart.svg";

const LikeBox = () => {
  const [cnt, setCnt] = useState(0);

  const addCnt = () => {
    setCnt((prev) => prev + 1);
  };

  const minusCnt = () => {
    if (cnt > 0) {
      setCnt((prev) => prev - 1);
    }
  };

  return (
    <div className="MainContainer">
      <div className="CntBox">
        {cnt}
        <img className="HeartSvg" src={heartSvg} />
      </div>
      <div className="BtnBox">
        <Button onClick={minusCnt} content="-" />
        <Button onClick={addCnt} content="+" />
      </div>
    </div>
  );
};

export default LikeBox;
