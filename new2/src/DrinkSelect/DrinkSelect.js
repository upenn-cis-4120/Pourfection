import React from "react";
import "./DrinkSelect.css";

export const DrinkSelect = ({ switchPage }) => {
  return (
    <div className="DrinkSelect">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Drink Selection</div>

          <div className="frame">
            <div className="group">
              <div className="overlap-group">
                <img
                  className="vector"
                  alt="Vector"
                  src="/imagesDrinkSelect/vector.svg"
                />
              </div>

              <div className="vector-wrapper">
                <img
                  className="vector"
                  alt="Vector"
                  src="/imagesDrinkSelect/vector-1.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <img
          className="rectangle"
          alt="Rectangle"
          src="/imagesDrinkSelect/rectangle-42.svg"
          onClick={() => switchPage('ExtractionSettings')}
          style={{ cursor: 'pointer' }}
        />

        <img
          className="img"
          alt="Rectangle"
          src="/imagesDrinkSelect/rectangle-43.svg"
          onClick={() => switchPage('ExtractionSettings')}
          style={{ cursor: 'pointer' }}
        />

        <img
          className="rectangle-2"
          alt="Rectangle"
          src="/imagesDrinkSelect/rectangle-44.svg"
          onClick={() => switchPage('ExtractionSettings')}
          style={{ cursor: 'pointer' }}
        />

        <img
          className="rectangle-3"
          alt="Rectangle"
          src="/imagesDrinkSelect/rectangle-45.svg"
          onClick={() => switchPage('ExtractionSettings')}
          style={{ cursor: 'pointer' }}
        />

        <img
          className="rectangle-4"
          alt="Rectangle"
          src="/imagesDrinkSelect/rectangle-46.svg"
          onClick={() => switchPage('ExtractionSettings')}
          style={{ cursor: 'pointer' }}
        />

        <div className="overlap-2"
        onClick={() => switchPage('Menu')}
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
          onClick={() => switchPage('ExtractionSettings')}
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