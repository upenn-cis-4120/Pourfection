import React from "react";
import { useNavigate } from 'react-router-dom';
import "./DrinkSelect.css";

export const DrinkSelect = ({ switchPage }) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/extraction-settings');
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleMenu = () => {
    navigate('/menu'); // Navigate to the menu page
  };

  return (
    <div className="DrinkSelect">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Drink Selection</div>

          <div className="group">
            <div className="back-button button" onClick={handleBack}>
              <img
                className="icon-symbol"
                alt="Back Arrow"
                src="/imagesLandingPage/vector.svg"
              />
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
          className="rectangle"
          alt="Rectangle"
          src="/imagesDrinkSelect/rectangle-42.svg"
          onClick={handleContinue}
          style={{ cursor: 'pointer' }}
        />

        <img
          className="img"
          alt="Rectangle"
          src="/imagesDrinkSelect/rectangle-43.svg"
          onClick={handleContinue}
          style={{ cursor: 'pointer' }}
        />

        <img
          className="rectangle-2"
          alt="Rectangle"
          src="/imagesDrinkSelect/rectangle-44.svg"
          onClick={handleContinue}
          style={{ cursor: 'pointer' }}
        />

        <img
          className="rectangle-3"
          alt="Rectangle"
          src="/imagesDrinkSelect/rectangle-45.svg"
          onClick={handleContinue}
          style={{ cursor: 'pointer' }}
        />

        <img
          className="rectangle-4"
          alt="Rectangle"
          src="/imagesDrinkSelect/rectangle-46.svg"
          onClick={handleContinue}
          style={{ cursor: 'pointer' }}
        />

        <div className="overlap-2"
        onClick={handleContinue}
          style={{ cursor: 'pointer' }}>
          <div className="text-wrapper-2">Other</div>

          <div className="text-wrapper-3">...type here</div>

          <img
            className="rectangle-5"
            alt="Rectangle"
            src="/imagesDrinkSelect/rectangle-58.svg"
          />

          <div className="text-wrapper-4">Done</div>

          <img
            className="coffee-beans"
            alt="Coffee beans"
            src="/imagesDrinkSelect/coffee-beans@2x.png"
          />
        </div>

        <img
          className="rectangle-6"
          alt="Rectangle"
          src="/imagesDrinkSelect/rectangle-47.svg"
          onClick={handleContinue}
          style={{ cursor: 'pointer' }}
        />

        <div className="overlap-3">
          <img
            className="rectangle-7"
            alt="Rectangle"
            src="/imagesDrinkSelect/rectangle-52.svg"
          />

          <div className="text-wrapper-5">Other:</div>

          <input className="text-wrapper-6" type="text" placeholder="type here" />
        </div>
      </div>
    </div>
  );
};

export default DrinkSelect;