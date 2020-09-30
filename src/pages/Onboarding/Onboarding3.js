import React from "react";
import ProgressBar from "../../components/Onboarding/ProgressBar";
import { Link } from "react-router-dom";
import "./Onboarding.scss";

function OnboardingThree(props) {
  return (
    <div className="OnboardingThree">
      <Link to="onboarding2">
        <button><i class="fas fa-chevron-circle-left"></i></button>
      </Link>
      <div className="image-placeholder">Image Placeholder</div>
      <p>Read about referendums and candidates and make your selections</p>
      <Link to="onboarding4">
        <button className="nextButton">Next</button>
      </Link>
      <ProgressBar pathname={props.location.pathname} className="progressBar"/>
    </div>
  );
}

export default OnboardingThree;
