import React from "react";
import './EndBallotPage.scss';
import logo from "../../images/MyBallotWA.svg";
import printthis from "../../images/myballotWA_print.svg";
import email from "../../images/myballotWA_email.svg";

const ids = ['1'];

function EndBallotPage() {
  return (
    <div className='EndBallotPage'>
      <img src={logo} alt="Site logo. myBallotWA" />
      <p>ELECTION: November 3, 2020</p>
      <p>Below is your completed ballot</p>
        <div id="ballot-container">
          <p>This is p tag. It has words in it.</p>
        </div>
      <div id="icon-container">
        <button id="print" ><img src={printthis} alt="Click image to print ballot"/></button>
        <button id="email"><img src={email} alt="Click image to email ballot"/></button>
      </div>
    </div>
  );
}

export default EndBallotPage;
