import "./App.css";
import React, { useState, useEffect } from "react";
import PhoneImg from "./images/phone.svg";
import LogoImg from "./images/logo.svg";
import BackImg from "./images/backImage.svg";
import Navbar from "./components/Navbar";
import TabsData from "./components/TabsData";
import PagesCon from "./components/PagesCon";

function App() {
  const [showModalCon, setShowModalCon] = useState(false);

  const handleModalConClick = (e) => {
    console.log("handleModalConClick", e.target.className);
    console.dir(e.target);
    if (e.target.classList.contains("pagesModalCon")) {
      console.log("inside if");
      setShowModalCon(false);
    }
  };

  return (
    <main className="main">
      <Navbar setShowModalCon={setShowModalCon} />
      <div className="bodyCon">
        <div className="leftCon">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">Explore Now</button>
        </div>
        <div className="rightCon">
          <img src={PhoneImg} />
        </div>
      </div>
      <div
        className={`pagesModalCon${showModalCon ? " showModalCon" : ""}`}
        onClick={handleModalConClick}
      >
        <div className="modal">
          {TabsData.map((tabData) => {
            return <PagesCon content={tabData.links} title={tabData.title} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
