import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExtractionSettings.css";

const ExtractionSettings = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/timer');
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleMenu = () => {
    navigate('/menu'); // Navigate to the menu page
  };

  const handleChangeMachine = () => {
    navigate('/'); // Navigate to the LandingPage
  };

  const handleChangeGrinder = () => {
    navigate('/'); // Navigate to the LandingPage
  };

  return (
    <div className="ExtractionSettings">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Extraction Settings</div>
          <div className="subtext">Based on your machine/drink, we recommend:</div>

          <div className="group">
            <div className="back-button button" onClick={handleBack}>
              <img
                className="icon-symbol"
                alt="Back Arrow"
                src="/imagesLandingPage/vector.svg"
              />
            </div>

            <div className="dot-indicators">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot filled"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>

            <div className="menu-button button" onClick={handleMenu}>
              <img
                className="icon-symbol"
                alt="Menu Symbol"
                src="/imagesLandingPage/vector-1.svg"
              />
            </div>
          </div>
        </div>

        <div className="div-wrapper">
          <div className="text-wrapper-2">8 g</div>
        </div>

        <div className="text-wrapper-3">Coffee Weight</div>

        <div className="overlap-2">
          <div className="text-wrapper-4">4.5</div>
        </div>

        <div className="text-wrapper-5">Grind Size</div>

        <div className="overlap-3">
          <div className="text-wrapper-6">10 Ba</div>
        </div>

        <p className="pressure">
          <span className="span">Pressure</span>
          <span className="text-wrapper-7">&nbsp;</span>
        </p>

        <div className="overlap-4">
          <div className="text-wrapper-8">18 s</div>
        </div>

        <div className="overlap-5"
          onClick={handleChangeMachine}
          style={{ cursor: 'pointer' }}>
          <div className="text-wrapper-9">Change Machine</div>
        </div>

        <div className="overlap-6"
          onClick={handleContinue}
          style={{ cursor: 'pointer' }}>
          <img
            className="rectangle"
            alt="Rectangle"
            src="/imagesExtractionSettings/rectangle-49.svg"
          />
          <div className="text-wrapper-10">Extract</div>
        </div>

        <div className="text-wrapper-11">Extraction Time</div>

        <div className="overlap-7"
          onClick={handleChangeGrinder}
          style={{ cursor: 'pointer' }}>
          <div className="text-wrapper-12">Change Grinder</div>
        </div>
      </div>
    </div>
  );
};

export default ExtractionSettings;