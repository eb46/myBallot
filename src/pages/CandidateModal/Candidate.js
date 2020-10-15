import React, { useState, useEffect } from "react";
import "./Candidate.scss";

import CandidateDeck from "../../components/CandidateDeck/CandidateDeck";

function Candidate({
  isDropCardClicked,
  handleDropCardClick,
  categoryName,
  cardData,
}) {
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    if (isDropCardClicked && categoryName !== "Measures") {
      setIsDisplay(true);
    }
  }, [isDropCardClicked]);

  const handleDisplayClick = () => {
    setIsDisplay(false);
  };

  let display = isDisplay ? "" : "slide-down";

  return (
    <div className="Candidate">
      <div className={`candidate-modal-bottom ${display}`}>
        <div className="exit-icon-container" onClick={handleDisplayClick}>
          <i class="far fa-times-circle"></i>
        </div>
        <p>Candidates</p>

        <CandidateDeck cardData={cardData} categoryName={categoryName} />
      </div>
    </div>
  );
}

export default Candidate;
