import React from "react";
import { useNavigate } from "react-router-dom";
import { useCoffeeParams } from '../context/CoffeeContext';
import "./ExtractionSettings.css";

const ExtractionSettings = () => {
  const navigate = useNavigate();
  const { coffeeParams, updateParams } = useCoffeeParams();  // Add updateParams

  const handleContinue = () => {
    navigate('/timer');
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleMenu = () => {
    navigate('/menu'); // Navigate to the menu page
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

  const handleParamChange = (param, value) => {
    updateParams({ [param]: value });
  };

  return (
    <div className="ExtractionSettings">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper centered">Extraction Settings</div>
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
              <div className="dot" data-tooltip="Initialization" onClick={handleInitialization}></div>
              <div className="dot" data-tooltip="Drink Selection" onClick={handleDrink}></div>
              <div className="dot filled" data-tooltip="Extraction Settings" onClick={handleExtrSettings}></div>
              <div className="dot" data-tooltip="Extraction Timer" onClick={handleTimer}></div>
              <div className="dot" data-tooltip="Feedback" onClick={handleFeedback}></div>
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
          <input
            type="text"
            className="text-wrapper-settings"
            value={coffeeParams.weight}
            onChange={(e) => handleParamChange('weight', e.target.value)}
          />
        </div>

        <div className="text-wrapper-3">Coffee Weight</div>

        <div className="overlap-2">
          <input
            type="text"
            className="text-wrapper-4"
            value={coffeeParams.grindSize}
            onChange={(e) => handleParamChange('grindSize', e.target.value)}
          />
        </div>

        <div className="text-wrapper-5">Grind Size</div>

        <div className="overlap-3">
          <input
            type="text"
            className="text-wrapper-6"
            value={coffeeParams.pressure}
            onChange={(e) => handleParamChange('pressure', e.target.value)}
          />
        </div>

        <p className="pressure">
          <span className="span">Pressure</span>
          <span className="text-wrapper-7">&nbsp;</span>
        </p>

        <div className="overlap-4">
          <input
            type="text"
            className="text-wrapper-8"
            value={coffeeParams.extractionTime}
            onChange={(e) => handleParamChange('extractionTime', e.target.value)}
          />
        </div>

        <div className="overlap-5"
          onClick={handleInitialization}
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
          onClick={handleInitialization}
          style={{ cursor: 'pointer' }}>
          <div className="text-wrapper-12">Change Grinder</div>
        </div>
      </div>
    </div>
  );
};

export default ExtractionSettings;