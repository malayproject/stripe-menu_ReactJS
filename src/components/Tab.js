import React, { useRef } from "react";

const Tab = (props) => {
  let { tabData, handleHover } = props;

  return (
    <div className="tab" onMouseEnter={(e) => handleHover(tabData, e)}>
      {tabData.title}
    </div>
  );
};

export default Tab;
