import React, { useRef, useEffect, useState } from "react";
import PagesCon from "./PagesCon";

const HoverTile = ({ lefty, content, title, show }) => {
  const hoverTileEl = useRef(null);
  const [leftVal, setLeftVal] = useState(lefty + 240);
  // console.log("leftval:", leftVal);
  let [isMouseOver, setIsMouseOver] = useState(false);
  let mouseIn = (e) => {
    setIsMouseOver(true);
  };
  let mouseOut = (e) => {
    if (
      !e.target.classList.contains("hovertile") &&
      !e.target.classList.contains("pagesCon") &&
      !e.target.classList.contains("page") &&
      !e.target.classList.contains("card") &&
      !e.target.classList.contains("pages") &&
      !e.target.classList.contains("pagetitle") &&
      !e.target.classList.contains("arrowup") &&
      !e.target.classList.contains("arrowCon")
    )
      return;
    setIsMouseOver(false);
  };

  useEffect(() => {
    setLeftVal(
      hoverTileEl.current
        ? lefty - hoverTileEl.current.getBoundingClientRect().width / 2
        : lefty
    );
  }, [content]);

  return (
    <div
      className={`hovertile${show || isMouseOver ? " show animatetile" : ""}`}
      style={{
        left: `${leftVal}px`,
        top: "4.2rem",
        backgroundColor: "white",
      }}
      ref={hoverTileEl}
      onMouseLeave={mouseOut}
      onMouseEnter={mouseIn}
    >
      <div className="arrowCon">
        <div className="arrowup"></div>
      </div>
      <PagesCon content={content} title={title} />
    </div>
  );
};

export default HoverTile;
