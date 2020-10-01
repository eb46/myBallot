import React from "react";
import { Link } from "react-router-dom";
import './EndBallotPage.scss';
import logo from "../../images/MyBallotWA.svg";
import print from "../../images/myballotWA_print.svg";
import email from "../../images/myballotWA_email.svg";


function EndBallotPage() {
  return (
    <div>
      <img src={logo} alt="Site logo. myBallotWA" />
      <p>ELECTION: November 3, 2020</p>
      <p>Below is your completed ballot</p>
      <div id="ballot-container">

      </div>
      <div id="icon-container">
        <img src={print} alt="Click image to print ballot"/>
        <img src={email} alt="Click image to email ballot"/>
      </div>
    </div>
  );
}

export default EndBallotPage;
