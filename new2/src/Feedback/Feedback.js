import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Feedback.css";

export const Feedback = ({ switchPage }) => {
  const [suggestion, setSuggestion] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleMenu = () => {
    navigate('/menu'); // Assuming '/menu' is the route for the menu page
  };

  const handleDrink = () => {
    navigate('/drink-select'); 
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


        <div className="too-watery-wrapper">
          <div className="text-wrapper-opensans-common" onClick={() => setSuggestion("Decrease the Extraction Time")}>
              Too<br />Watery
            </div>
        </div>

        <div className="overlap-5">
          <img
            className="rectangle-3"
            alt="Rectangle"
            src="/imagesFeedback/rectangle-62.svg"
          />
          <div className="text-wrapper-opensans-common" onClick={() => setSuggestion("Adjust the grinder size to 4\nIncrease the bean size")}>
            Too<br />Bitter
          </div>
        </div>

        <div className="overlap-6">
          <img
            className="rectangle-3"
            alt="Rectangle"
            src="/imagesFeedback/rectangle-63.svg"
          />
          <div className="text-wrapper-opensans-common" onClick={() => setSuggestion("")}>
            None<br />(Good!)
          </div>
        </div>

        <img
          className="line"
          alt="Line"
          src="/imagesFeedback/line-2.svg"
        />

        <div className="text-wrapper-11">Suggestions</div>

        <div className="overlap-7">
          <div className="suggestions">
            <img
              alt="Rectangle"
              src="/imagesFeedback/rectangle-64.svg"
            />
            <div className="text-wrapper-opensans-common">{suggestion}</div>
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
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot filled"></div>
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