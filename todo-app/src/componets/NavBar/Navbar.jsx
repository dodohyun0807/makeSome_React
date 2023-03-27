import React from "react";
import { TabTitle } from "../TabTitle/TabkTitle";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar_Maincontainer">
      <div>1</div>
      <TabTitle value={"ALL"} />
      <TabTitle value={"Active"} />
      <TabTitle value={"Completed"} />
    </div>
  );
};

export { Navbar };
