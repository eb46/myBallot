import React from "react";
import { Link } from "react-router-dom";
import "./StartForm.scss";

function StartForm() {
  const handleSubmit = () => {
    console.log("Submit");
  };

  return (
    <div className="StartForm">
      <Link to="/onboarding4">
        <button>
          <i class="fas fa-chevron-circle-left"></i>
        </button>
      </Link>
      <h1>Get Started</h1>
      <p>
        Find your local candidates and ballot issues by entering your address
        below
      </p>
      <form onSubmit={handleSubmit}>
        <lable>Street Address</lable>
        <input />

        <lable>Street Address Line 2</lable>
        <input />

        <div className="twoColumns">
          <div className="column1">
            <lable>City</lable>
            <input />
          </div>

          <div className="column2">
            <lable>Postal Code</lable>
            <input />
          </div>
        </div>
      </form>
      <Link to="/voterinfo">
        <button className="findElections">Find my elections</button>
      </Link>
    </div>
  );
}

export default StartForm;
