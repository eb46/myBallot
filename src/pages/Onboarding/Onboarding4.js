import React from "react";
import ProgressBar from "../../components/Onboarding/ProgressBar";
import { Link } from "react-router-dom";
import "./Onboarding.scss";

function OnboardingFour(props) {
  return (
    <div className="OnboardingFour">
      <Link to="onboarding3">
        <button>
          <i class="fas fa-chevron-circle-left"></i>
        </button>
      </Link>
      <div className="image-placeholder">Image Placeholder</div>
      <p>Print, email or share your ballot choices</p>
      <Link to="startform">
        <button className="nextButton">I'm ready to begin</button>
      </Link>
      <ProgressBar pathname={props.location.pathname} className="progressBar" />
    </div>
  );
}

export default OnboardingFour;
