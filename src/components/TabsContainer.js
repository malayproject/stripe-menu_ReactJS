import React, { useState, useRef } from "react";
import Tabs from "./Tabs";
import HoverTile from "./HoverTile";

const TabsContainer = () => {
  const [domRect, setDomRect] = useState({ left: 0, width: 0, links: [] });
  const [show, setShow] = useState(false);

  const handleHover = (tabData, e) => {
    // console.log(tabData);
    console.log(e.type);
    if (e.type === "mouseenter") {
      let data = e.target.getBoundingClientRect();
      console.log(data);
      setDomRect({
        left: data.left,
        width: data.width,
        links: tabData.links,
      });
      setShow(true);
    }
  };

  const handleMouseOut = (e) => {
    // debugger;
    console.dir(e.target);
    console.dir("currentTarget is ", e.currentTarget);
    // console.log("e.target is: ", e.target);
    // console.log("e.target children are:", e.target.children);
    // console.log("tabsEl.current is:", tabsEl.current);
    if (e.target.className === "tabsContainer") {
      console.log("if entered", e.target);
      setShow(false);
    }
  };
  return (
    <div className="tabsContainer">
      <Tabs handleHover={handleHover} onMouseOut={handleMouseOut} />
      <HoverTile
        lefty={domRect.left + domRect.width / 2}
        content={domRect.links}
        show={show}
      />
    </div>
  );
};

export default TabsContainer;
