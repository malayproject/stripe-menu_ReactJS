import React from "react";
import TabsData from "./TabsData";
import Tab from "./Tab";

const Tabs = (props) => {
  let { handleHover } = props;
  return (
    <div className="tabs" onMouseLeave={props.handleMouseOut}>
      {TabsData.map((tabData) => {
        return (
          <Tab tabData={tabData} handleHover={handleHover} key={tabData.id} />
        );
      })}
    </div>
  );
};

export default Tabs;
