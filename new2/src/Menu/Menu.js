import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleInitialization = () => {
    navigate('/'); 
  }

  const handleDrink = () => {
    navigate('/drink-select'); 
  }

  const handleExtrSettings = () => {
    navigate('/extraction-settings'); 
  }

  const handleTimer = () => {
    navigate('/timer'); 
  }

  const handleFeedback = () => {
    navigate('/feedback'); 
  }

  return (
    <div className="Menu">
      <div className="div">
        <div className="overlap"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          <div className="rectangle" />
          <div className="text-wrapper">Initialization</div>
        </div>

        <div className="overlap-group"
          onClick={() => navigate('/extraction-settings')}
          style={{ cursor: 'pointer' }}
        >
          <div className="rectangle-2" />
          <div className="text-wrapper-2">Calibration</div>
        </div>

        <div className="div-wrapper">
          <div className="text-wrapper-3">Suggested Upgrades</div>
        </div>

        <div className="overlap-2"
          onClick={() => navigate('/drink-select')}
          style={{ cursor: 'pointer' }}
        >
          <div className="rectangle-3" />
          <div className="text-wrapper-4">Drink Selection</div>
        </div>

        <div className="overlap-3">
          <div className="text-wrapper-4">Steamer Guide</div>
        </div>

        <div className="overlap-4">
          <div className="text-wrapper-5">Cleaning Guide</div>
        </div>

        <div className="overlap-5">
          <div className="text-wrapper-5">User Manuals</div>
        </div>

        <div className="overlap-6">
          <div className="text-wrapper-6">Main Menu</div>

          <div className="frame">
            <div className="group">
              <div className="back-button button" onClick={handleBack}>
                <img
                  className="icon-symbol"
                  alt="Back Arrow"
                  src="/imagesLandingPage/vector.svg"
                />
              </div>

            <div className="dot-indicators">
              <div className="dot" data-tooltip="Initialization" onClick={handleInitialization}></div>
              <div className="dot" data-tooltip="Drink Selection" onClick={handleDrink}></div>
              <div className="dot" data-tooltip="Extraction Settings" onClick={handleExtrSettings}></div>
              <div className="dot" data-tooltip="Extraction Timer" onClick={handleTimer}></div>
              <div className="dot" data-tooltip="Feedback" onClick={handleFeedback}></div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;