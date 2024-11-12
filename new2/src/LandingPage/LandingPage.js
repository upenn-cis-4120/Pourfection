import React from 'react';
import './LandingPage.css';


export const LandingPage = ({ switchPage }) => {
  return (
    <div className="LandingPage">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Pourfection</div>

          <div className="group">
            <div className="overlap-group">
              <img
                className="vector"
                alt="Vector"
                src="/imagesLandingPage/vector.svg"
              />
            </div>

            <div className="vector-wrapper">
              <img
                className="vector"
                alt="Vector"
                src="/imagesLandingPage/vector-1.svg"
              />
            </div>
          </div>
        </div>

        <div className="overlap-2">
          <div className="overlap-3">
            <div className="text-wrapper-2">Select Grinder</div>

            <img
              className="rectangle"
              alt="Rectangle"
              src="/imagesLandingPage/rectangle-79.svg"
            />

            <div className="text-wrapper-3">type here</div>
          </div>

          <div className="overlap-4">
            <div className="timemore">
              Timemore
              <br />
              C3
            </div>

            <img
              className="shopping"
              alt="Shopping"
              src="/imagesLandingPage/shopping-2@2x.png"
            />
          </div>

          <div className="overlap-5">
            <div className="rectangle-2" />

            <img
              className="element-f"
              alt="Element f"
              src="/imagesLandingPage/360-f-184720836-jyivkigjlnfndakprdmx2mntlru9bkmk-2@2x.png"
            />

            <div className="text-wrapper-4">Preground</div>
          </div>
        </div>

        <div className="overlap-6">
          <div className="overlap-7">
            <div className="rectangle-3" />

            <img
              className="delonghi-bar"
              alt="Delonghi bar"
              src="/imagesLandingPage/delonghi-ecp3420-bar-pump-espresso-machine-e2cc283d5dc04c3ab80c1@2x.png"
            />

            <div className="de-longhi">
              De’Longhi
              <br />
              ECP3420
            </div>
          </div>

          <div className="overlap-8">
            <img
              className="img"
              alt="Rectangle"
              src="/imagesLandingPage/rectangle-79.svg"
            />

            <div className="text-wrapper-3">type here</div>

            <div className="text-wrapper-2">Select Machine</div>
          </div>
        </div>

        <img
          className="LOGO"
          alt="Logo"
          src="/imagesLandingPage/logo-2@2x.png"
        />

        <div className="overlap-9">
          <img
            className="rectangle-4"
            alt="Rectangle"
            src="/imagesLandingPage/rectangle-78.svg"
          />

          <div className="continue-to-drink"
          onClick={() => switchPage('DrinkSelect')}
          style={{ cursor: 'pointer' }}
          >
            Continue to
            <br />
            Drink Selection
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;