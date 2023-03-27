import React from "react";

const TabTitle = ({ value }) => {
  //const [isClick, setIsClick] = useState(0);
  let isClick = 0;
  return <>{isClick ? <div>{value}</div> : <div>{value}</div>}</>;
};

export { TabTitle };
