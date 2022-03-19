import React, { useRef, useEffect, useState } from "react";

const HoverTile = ({ lefty, content, show }) => {
  // console.log(content);
  const hoverTileEl = useRef(null);
  const [leftVal, setLeftVal] = useState(lefty);

  useEffect(() => {
    setLeftVal(
      hoverTileEl.current
        ? lefty - hoverTileEl.current.getBoundingClientRect().width / 2
        : lefty
    );

    console.log("hovertile is : ", hoverTileEl.current);

    console.log(
      "Left/lefty value for hovertile is ",
      leftVal,
      lefty,
      hoverTileEl.current.getBoundingClientRect()
    );
  }, [content]);

  return (
    <div
      className={`hovertile${show ? " show" : ""}`}
      style={{
        left: `${leftVal}px`,
        top: "8rem",
        backgroundColor: "white",
      }}
      ref={hoverTileEl}
    >
      {content.map((item) => {
        // console.log(item);
        return (
          <a
            className="page"
            style={{ padding: "1rem", textDecoration: "none", color: "black" }}
            href={`./${item}`}
            key={item}
          >
            {item}
          </a>
        );
      })}
    </div>
  );
};

export default HoverTile;
