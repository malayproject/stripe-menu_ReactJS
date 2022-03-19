import "./App.css";
import PhoneImg from "./images/phone.svg";
import LogoImg from "./images/logo.svg";
import BackImg from "./images/backImage.svg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="main">
      <Navbar />
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
    </main>
  );
}

export default App;
