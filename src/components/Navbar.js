import React from "react";
import Logo from "../images/logo.svg";
import Tabs from "./Tabs";
import TabsContainer from "./TabsContainer";
import { FaBars } from "react-icons/fa";
import TabsData from "./TabsData";

const Navbar = ({ setShowModalCon }) => {
  return (
    <div className="navbar">
      <img src={Logo} className="logo" />
      <TabsContainer />
      <button className="btn signin">Sign In</button>
      <div
        className="burgerCon"
        onClick={(e) => {
          // console.log(e.target);
          setShowModalCon(true);
        }}
      >
        <FaBars className="burger" />
      </div>
    </div>
  );
};

export default Navbar;
