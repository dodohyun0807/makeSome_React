import React from "react";
import "./ImageAvatar.css";

const ImageAvatar = ({ url, des }) => {
  return <img className="photo" src={url} alt={des} />;
};

export default React.memo(ImageAvatar);
