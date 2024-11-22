import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Feedback.css";

export const Feedback = ({ switchPage }) => {
  const [suggestion, setSuggestion] = useState("");
  const [smoothness, setSmoothness] = useState(0);
  const [strength, setStrength] = useState(0);
  const [aroma, setAroma] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [acidity, setAcidity] = useState(0);
  const [overallEnjoyment, setOverallEnjoyment] = useState(0);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleMenu = () => {
    navigate('/menu'); // Assuming '/menu' is the route for the menu page
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

        <div className="text-wrapper-6">Questionnaire</div>

        <div className="overlap-7">
          <div className="suggestions">
            <div className="question">
              <div className="question-title">Smoothness</div>
              <div className="scale">
                {[1,2,3,4,5].map((value) => (
                    <span
                        key={`smoothness-${value}`}
                        className={`dot ${smoothness >= value ? 'filled' : ''}`}
                        onClick={() => setSmoothness(value)}
                    ></span>
                ))}
              </div>
            </div>

            {/* Strength/Intensity */}
            <div className="question">
              <div className="question-title">Strength/Intensity</div>
              <div className="scale">
                {[1,2,3,4,5].map((value) => (
                    <span
                        key={`strength-${value}`}
                        className={`dot ${strength >= value ? 'filled' : ''}`}
                        onClick={() => setStrength(value)}
                    ></span>
                ))}
              </div>
            </div>

            {/* Aroma and Flavor Clarity */}
            <div className="question">
              <div className="question-title">Aroma</div>
              <div className="scale">
                {[1,2,3,4,5].map((value) => (
                    <span
                        key={`aroma-${value}`}
                        className={`dot ${aroma >= value ? 'filled' : ''}`}
                        onClick={() => setAroma(value)}
                    ></span>
                ))}
              </div>
            </div>

            {/* Temperature */}
            <div className="question">
              <div className="question-title">Temperature</div>
              <div className="scale">
                {[1,2,3,4,5].map((value) => (
                    <span
                        key={`temperature-${value}`}
                        className={`dot ${temperature >= value ? 'filled' : ''}`}
                        onClick={() => setTemperature(value)}
                    ></span>
                ))}
              </div>

            </div>

            {/* Acidity */}
            <div className="question">
              <div className="question-title">Acidity</div>
              <div className="scale">
                {[1,2,3,4,5].map((value) => (
                    <span
                        key={`acidity-${value}`}
                        className={`dot ${acidity >= value ? 'filled' : ''}`}
                        onClick={() => setAcidity(value)}
                    ></span>
                ))}
              </div>
            </div>

            {/* Overall Enjoyment */}
            <div className="question">
              <div className="question-title">Overall Enjoyment</div>
              <div className="scale">
                {[1,2,3,4,5].map((value) => (
                    <span
                        key={`overall-${value}`}
                        className={`dot ${overallEnjoyment >= value ? 'filled' : ''}`}
                        onClick={() => setOverallEnjoyment(value)}
                    ></span>
                ))}
              </div>
            </div>

          </div>
          <img
            className="rectangle-5"
            alt="Rectangle"
            src="/imagesFeedback/rectangle-49.svg"
            onClick={() => switchPage('DrinkSelect')}
            style={{ cursor: 'pointer' }}
          />
          <div className="return-to-drink" onClick={handleDrink} style={{ cursor: 'pointer' }}>
            Return to<br />Drink Selection
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
      </div>
    </div>
  );
};

export default Feedback