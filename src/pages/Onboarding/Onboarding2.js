import React from "react";
import ProgressBar from "../../components/Onboarding/ProgressBar";
import { Link } from "react-router-dom";
import "./Onboarding.scss";
import Onboarding2 from '../../images/Onboard_Graphic2.svg'



function OnboardingTwo(props) {
  return (
    <div className='OnboardingTwo'>
      <Link to="onboarding1">
        <button><i class="fas fa-chevron-circle-left"></i></button>
      </Link>
      <h1>Select</h1>
      <h1>your choices</h1>
      <img src={Onboarding2} className="image-placeholder" alt="onboarding 2 directions"/>
      <p>Read about ballot issues and meet the candidates. Then, add your choices to your ballot.</p>
      <Link to="onboarding3">
        <button className="nextButton">Next</button>
      </Link>
      <ProgressBar pathname={props.location.pathname} className="progressBar"/>
    </div>
  );
}

export default OnboardingTwo;
