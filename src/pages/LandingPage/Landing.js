import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";
import logo from "../../images/MyBallotWA.svg";

function LandingPage() {
  return (
    <div className="LandingPage">
      <img src={logo} alt='Site logo. myBallotWA' />
      <p>Build a better ballot</p>
      <p>Find all of the information you need to be ready for election day</p>
      <div id="button-div">
        <Link to="/onboarding1">
          <button>Get started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
