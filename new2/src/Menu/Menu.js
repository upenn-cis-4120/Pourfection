import React from "react";
import "./Menu.css";

export const Menu = ({ switchPage }) => {
  return (
    <div className="Menu">
      <div className="div">
        <div className="overlap"
        onClick={() => switchPage('LandingPage')}
        style={{ cursor: 'pointer' }}
        >
          <div className="rectangle" />

          <div className="text-wrapper">Initialization</div>
        </div>

        <div className="overlap-group"
        onClick={() => switchPage('ExtractionSettings')}
        style={{ cursor: 'pointer' }}>
          <div className="rectangle-2" />

          <div className="text-wrapper-2">Calibration</div>
        </div>

        <div className="div-wrapper">
          <div className="text-wrapper-3">Suggested Upgrades</div>
        </div>

        <div className="overlap-2"
        onClick={() => switchPage('DrinkSelect')}
        style={{ cursor: 'pointer' }}>
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
              <div className="vector-wrapper">
                <img
                  className="vector"
                  alt="Vector"
                  src="/imagesMenu/vector.svg"
                />
              </div>

              <div className="img-wrapper">
                <img
                  className="vector"
                  alt="Vector"
                  src="/imagesMenu/vector-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu