import React from "react";
import ProgressBar from "../../components/Onboarding/ProgressBar";
import { Link } from "react-router-dom";
import "./Onboarding.scss";
import Onboarding4 from '../../images/Onboard_Graphic4.svg'

function OnboardingFour(props) {
  return (
    <div className='OnboardingFour'>
      <Link to="onboarding3">
        <button><i class="fas fa-chevron-circle-left"></i></button>
      </Link>
      <h1>Save</h1>
      <h1>your ballot</h1>
      <img src={Onboarding4} className="image-placeholder" alt="onboarding 4 directions"/>
      <p>Print or email your ballot choices. You're now ready to complete your <span>official</span> mail-in ballot arrives!</p>
      <Link to="/startform">
        <button className="nextButton">Next</button>
      </Link>
      <ProgressBar pathname={props.location.pathname} className="progressBar"/>
    </div>
  );
}

export default OnboardingFour;
