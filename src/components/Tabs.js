import React from "react";
import TabsData from "./TabsData";
import Tab from "./Tab";

const Tabs = (props) => {
  // console.log("Tabs props are ", props);
  let { handleHover } = props;
  return (
    <div className="tabs">
      {TabsData.map((tabData) => {
        return (
          <Tab tabData={tabData} handleHover={handleHover} key={tabData.id} />
        );
      })}
    </div>
  );
};

export default Tabs;
