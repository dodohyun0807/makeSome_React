import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../atoms";
import "./LikeBox.css";
import heartSvg from "../../../asset/heart.svg";

const LikeBox = ({ totalSet, like }) => {
  const [cnt, setCnt] = useState(like);

  // useEffect(() => {
  //   localStorage.setItem(`cnt${id}`, cnt);
  // }, [cnt]);

  const addCnt = useCallback(() => {
    setCnt((prev) => prev + 1);
    totalSet((prev) => prev + 1);
  }, [totalSet]);

  const minusCnt = useCallback(() => {
    if (cnt > 0) {
      setCnt((prev) => prev - 1);
      totalSet((prev) => prev - 1);
    }
  }, [cnt, totalSet]);

  return (
    <div className="LikeBoxMainContainer">
      <div className="CntBox">
        <span>{cnt}</span>
        <img className="HeartSvg" src={heartSvg} alt="heartIcon" />
      </div>
      <div className="BtnBox">
        <Button onClick={minusCnt} content="-" />
        <Button onClick={addCnt} content="+" />
      </div>
    </div>
  );
};

export default LikeBox;
