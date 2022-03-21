import React, { useState, useRef } from "react";
import Tabs from "./Tabs";
import HoverTile from "./HoverTile";

const TabsContainer = () => {
  const [domRect, setDomRect] = useState({
    left: 440,
    width: 0,
    links: [],
    title: "",
  });
  const [show, setShow] = useState(false);

  const handleHover = (tabData, e) => {
    if (e.type === "mouseenter") {
      let data = e.target.getBoundingClientRect();
      setDomRect({
        left: data.left,
        width: data.width,
        links: tabData.links,
        title: tabData.title,
      });
      setShow(true);
    }
  };

  const handleMouseOut = (e) => {
    if (
      !(
        e.target.classList.contains("tabs") ||
        e.target.classList.contains("tab")
      )
    )
      return;
    setShow(false);
  };
  return (
    <div className="tabsContainer">
      <Tabs handleHover={handleHover} handleMouseOut={handleMouseOut} />
      {/* {console.log("lefty in tabsCon:", domRect.left)} */}
      <HoverTile
        lefty={domRect.left + domRect.width / 2}
        content={domRect.links}
        title={domRect.title}
        show={show}
      />
    </div>
  );
};

export default TabsContainer;
