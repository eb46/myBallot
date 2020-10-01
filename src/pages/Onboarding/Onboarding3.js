import React from "react";
import ProgressBar from "../../components/Onboarding/ProgressBar";
import { Link } from "react-router-dom";
import "./Onboarding.scss";
import Onboarding3 from '../../images/Onboard_Graphic3.svg'

function OnboardingThree(props) {
  return (
    <div className='OnboardingThree'>
      <Link to="onboarding2">
        <button><i class="fas fa-chevron-circle-left"></i></button>
      </Link>
      <h1>Review</h1>
      <h1>your ballot</h1>
      <img src={Onboarding3} className="image-placeholder" alt="onboarding 3 directions"/>
      <p>Review your ballot choices, and make any changes you see fit.</p>
      <Link to="onboarding4">
        <button className="nextButton">Next</button>
      </Link>
      <ProgressBar pathname={props.location.pathname} className="progressBar"/>
    </div>
  );
}

export default OnboardingThree;
