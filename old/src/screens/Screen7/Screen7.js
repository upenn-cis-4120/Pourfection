import React from "react";
import "./style.css";

export const Screen7 = () => {
  return (
    <div className="Screen7">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Extraction Timer</div>

          <div className="frame">
            <div className="group">
              <div className="overlap-group">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://c.animaapp.com/wpzryagg/img/vector.svg"
                />
              </div>

              <div className="vector-wrapper">
                <img
                  className="vector"
                  alt="Vector"
                  src="https://c.animaapp.com/wpzryagg/img/vector-1.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="frame-2">
          <div className="text-wrapper-2">18:00</div>

          <img
            className="btn"
            alt="Btn"
            src="https://c.animaapp.com/wpzryagg/img/btn.svg"
          />
        </div>

        <div className="frame-wrapper">
          <div className="frame-3">
            <div className="text-wrapper-3">Done</div>

            <img
              className="coffee-beans"
              alt="Coffee beans"
              src="https://c.animaapp.com/wpzryagg/img/coffee-beans@2x.png"
            />
          </div>
        </div>

        <div className="overlap-2">
          <img
            className="rectangle"
            alt="Rectangle"
            src="https://c.animaapp.com/wpzryagg/img/rectangle-51.svg"
          />

          <p className="recommended">
            <span className="span">
              Recommended:
              <br />
            </span>

            <span className="text-wrapper-4">18 Seconds</span>
          </p>
        </div>
      </div>
    </div>
  );
};

