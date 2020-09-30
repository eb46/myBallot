import React from "react";
import ProgressBar from "../../components/Onboarding/ProgressBar";
import { Link } from "react-router-dom";
import "./Onboarding.scss";

function OnboardingOne(props) {
  const { pathname } = props;

  return (
    <div className="OnboardingOne">
      <Link to="/">
        <button><i class="fas fa-chevron-circle-left"></i></button>
      </Link>
      <div className="image-placeholder">Image Placeholder</div>
      <p>Select position you want to vote for</p>
      <Link to="onboarding2">
        <button className="nextButton">Next</button>
      </Link>
      <ProgressBar pathname={props.location.pathname} className="progressBar" />
    </div>
  );
}

export default OnboardingOne;
