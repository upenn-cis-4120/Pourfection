import React from "react";
import "./ExtractionSettings.css";

export const ExtractionSettings = ({ switchPage }) => {
  return (
    <div className="ExtractionSettings">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Extraction Settings</div>

          <div className="frame">
            <div className="group">
              <div className="overlap-group">
                <img
                  className="vector"
                  alt="Vector"
                  src="/imagesExtractionSettings/vector.svg"
                />
              </div>

              <div className="vector-wrapper">
                <img
                  className="vector"
                  alt="Vector"
                  src="/imagesExtractionSettings/vector-1.svg"
                />
              </div>
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
        onClick={() => switchPage('LandingPage')}
        style={{ cursor: 'pointer' }}>
          <div className="text-wrapper-9">Change Machine</div>
        </div>

        <div className="overlap-6"
        onClick={() => switchPage('Timer')}
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
        onClick={() => switchPage('LandingPage')}
        style={{ cursor: 'pointer' }}>
          <div className="text-wrapper-12">Change Grinder</div>
        </div>
      </div>
    </div>
  );
};

export default ExtractionSettings