import React from "react";
import "./TextTitle.css";

const TextTitle = ({ content }) => {
  return <span className="title">{content}</span>;
};

export default React.memo(TextTitle);
