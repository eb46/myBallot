import React from "react";
import './EndBallotPage.scss';
import dklogo from "../../images/myBallotWA_Black.svg";
import printthis from "../../images/myballotWA_print.svg";
import email from "../../images/myballotWA_email.svg";

function EndBallotPage() {
  return (
    <div className='EndBallotPage'>
      <img id="logo" src={dklogo} alt="Site logo. myBallotWA" />
      <p>ELECTION: November 3, 2020</p>
      <p>Below is your completed ballot</p>
      <div id="icon-container">
        <button id="print" ><img src={printthis} alt="Click image to print ballot"/></button>
        <button id="email"><img src={email} alt="Click image to email ballot"/></button>
      </div>
      <div id="ballot-container">
      </div>
    </div>
  );
}

export default EndBallotPage;
