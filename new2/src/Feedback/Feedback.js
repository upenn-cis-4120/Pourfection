import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Feedback.css";

export const Feedback = ({ switchPage }) => {
  const [suggestion, setSuggestion] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [isTooBitterSelected, setIsTooBitterSelected] = useState(false);
  const [isTooWaterySelected, setIsTooWaterySelected] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleDrink = () => {
    navigate('/drink-select');
  }

  const handleMenu = () => {
    navigate('/menu'); // Assuming '/menu' is the route for the menu page
  };

  const handleInitialization = () => {
    navigate('/'); 
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

  const handlePopup = (content) => {
    setPopupContent(content);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent("");
  };

  const handleSubmitFeedback = () => {
    // Handle feedback submission logic here
    console.log("Feedback submitted:", suggestion);
    navigate('/drink-select'); 
  };

  const toggleTooBitter = () => {
    setIsTooBitterSelected(!isTooBitterSelected);
    handlePopup("Adjust the grinder size to 4\nIncrease the bean size");
  };

  const toggleTooWatery = () => {
    setIsTooWaterySelected(!isTooWaterySelected);
    handlePopup("Decrease the Extraction Time");
  };

  return (
    <div className="Feedback">
      <div className="div">
        <div className="text-wrapper-title">Feedback</div>
        <div className="subtext">Based on your chosen settings, any feedback?</div>

        <div className="text-wrapper-2">Weight used:</div>
        <div className="overlap-group">
          <img
            className="img"
            alt="Rectangle"
            src="/imagesFeedback/rectangle-60.svg"
          />
          <div className="editable-input-container">
            <input
              type="text"
              className="editable-input"
              defaultValue="8g"
            />
          </div>
        </div>

        <div className="text-wrapper-3">Grind size:</div>
        <div className="overlap-2">
          <img
            className="rectangle-2"
            alt="Rectangle"
            src="/imagesFeedback/rectangle-60.svg"
          />
          <div className="editable-input-container">
            <input
              type="text"
              className="editable-input"
              defaultValue="4.5"
            />
          </div>
        </div>

        <div className="text-wrapper-4">Pressure:</div>
        <div className="overlap-3">
          <img
            className="img"
            alt="Rectangle"
            src="/imagesFeedback/rectangle-60.svg"
          />
          <div className="editable-input-container">
            <input
              type="text"
              className="editable-input"
              defaultValue="9 bars"
            />
          </div>
        </div>

        <div className="text-wrapper-5">Extraction Time:</div>
        <div className="overlap-4">
          <img
            className="rectangle-2"
            alt="Rectangle"
            src="/imagesFeedback/rectangle-60.svg"
          />
          <div className="editable-input-container">
            <input
              type="text"
              className="editable-input"
              defaultValue="18s"
            />
          </div>
        </div>

        <div className="text-wrapper-6">Common Problems?</div>

        <div className="overlap">
          <img
            className="rectangle"
            alt="Rectangle"
            src="/imagesFeedback/rectangle-52.svg"
          />

          <div className="text-wrapper-7">Other:</div>
          <div className="text-wrapper-8">type here</div>
        </div>

        <div className={`too-watery-wrapper ${isTooWaterySelected ? "selected" : ""}`} onClick={toggleTooWatery}>
          <div className="text-wrapper-opensans-common">
            Too<br />Watery
          </div>
        </div>

        <div className={`overlap-5 ${isTooBitterSelected ? "selected" : ""}`} onClick={toggleTooBitter}>
          <img
            className="rectangle-3"
            alt="Rectangle"
            src="/imagesFeedback/rectangle-62.svg"
          />
          <div className="text-wrapper-opensans-common">
            Too<br />Bitter
          </div>
        </div>

        <div className="overlap-6">
          <img
            className="rectangle-3"
            alt="Rectangle"
            src="/imagesFeedback/rectangle-63.svg"
          />
          <div className="text-wrapper-opensans-common" onClick={() => handlePopup("Great Job!")}>
            None<br />(Good!)
          </div>
        </div>

        <img
          className="line"
          alt="Line"
          src="/imagesFeedback/line-2.svg"
        />

        <div className="text-wrapper-11">Feedback</div>

        <div className="overlap-7">
          <textarea
            className="feedback-input-container"
            placeholder="Enter your feedback here..."
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
          />
          <img
            className="rectangle-5"
            alt="Rectangle"
            src="/imagesFeedback/rectangle-49.svg"
            onClick={() => switchPage('DrinkSelect')}
            style={{ cursor: 'pointer' }}
          />
          <div className="submit-feedback-wrapper" onClick={handleSubmitFeedback} style={{ cursor: 'pointer' }}>
            Submit Feedback
          </div>
        </div>

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
              <div className="dot filled" data-tooltip="Feedback" onClick={handleFeedback}></div>
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

        <img
          className="line-2"
          alt="Line"
          src="/imagesFeedback/line-2.svg"
        />

        {showPopup && (
          <div className="popup" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closePopup}>&times;</span>
              <p>{popupContent}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feedback;