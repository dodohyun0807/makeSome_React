import React from "react";
import "./Card.css";

const Card = ({ children }) => {
  return <div className="CardContainer">{children}</div>;
};

export default Card;
