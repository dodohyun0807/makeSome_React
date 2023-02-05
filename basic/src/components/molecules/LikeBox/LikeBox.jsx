import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../atoms";
import "./LikeBox.css";
import heartSvg from "../../../asset/heart.svg";
import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const LikeBox = ({ totalSet, like, id }) => {
  const [cnt, setCnt] = useState(like);

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

  useEffect(() => {
    async function updateData() {
      const cardUpdate = doc(db, "cards", `${id}`);
      await updateDoc(cardUpdate, {
        like: cnt,
      });
    }
    updateData();
  }, [cnt, id]);

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
