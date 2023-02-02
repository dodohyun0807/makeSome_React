import React from "react";
import "./Button.css";

const Button = ({ onClick, content }) => {
  return (
    <button className="Button" onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
