import React from "react";
import ProgressBar from "../../components/Onboarding/ProgressBar";
import { Link } from "react-router-dom";
import "./Onboarding.scss";
import Onboarding1 from '../../images/Onboard_Graphic1.svg'

function OnboardingOne(props) {
  const { pathname } = props;

  return (
    <div className="OnboardingOne">
      <Link to="/">
        <button><i class="fas fa-chevron-circle-left"></i></button>
      </Link>
      <h1>View</h1>
      <h1>open positions</h1>
      <img src={Onboarding1} className="image-placeholder" alt="onboarding 1 directions"/>
      <p>Select open positions and ballot issues up for vote in the next election.</p>
      <Link to="onboarding2">
        <button className="nextButton">Next</button>
      </Link>
      <ProgressBar pathname={props.location.pathname} className="progressBar" />
    </div>
  );
}

export default OnboardingOne;
