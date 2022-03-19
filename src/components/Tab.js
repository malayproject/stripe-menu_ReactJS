import React, { useRef } from "react";

const Tab = (props) => {
  // console.log("tab props are ", props);
  let { tabData, handleHover } = props;

  return (
    <div
      className="tab"
      onMouseEnter={(e) => handleHover(tabData, e)}
      // onMouseOut={(e) => handleHover(tabData, e)}
    >
      {tabData.title}
    </div>
  );
};

export default Tab;
