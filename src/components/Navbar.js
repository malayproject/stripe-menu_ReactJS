import React from "react";
import Logo from "../images/logo.svg";
import Tabs from "./Tabs";
import TabsContainer from "./TabsContainer";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} className="logo" />
      <TabsContainer />
      <button className="btn signin">Sign In</button>
    </div>
  );
};

export default Navbar;
