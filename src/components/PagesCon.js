import React from "react";
import { FaCreditCard } from "react-icons/fa";

const PagesCon = ({ content, title }) => {
  return (
    <div className="pagesCon">
      <div className="pagetitle">{title}</div>
      <div className="pages">
        {" "}
        {content.map((item) => {
          return (
            <a
              className="page"
              style={{
                padding: "1rem",
                textDecoration: "none",
                color: "black",
              }}
              href={`./${item}`}
              key={item}
            >
              <FaCreditCard className="card" />
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PagesCon;
