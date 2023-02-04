import React from "react";
import "./Banner.css";

const Banner = ({ totalCnt }) => {
  return (
    <div className="BannerMainContainer">
      <span>total count : {totalCnt} ! </span>
      {totalCnt >= 10 ? <span>🔥</span> : <span> </span>}
    </div>
  );
};

export default Banner;
