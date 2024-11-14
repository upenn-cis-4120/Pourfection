import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Timer.css";

export const Timer = ({ switchPage }) => {
  const [time, setTime] = useState(18); // Initial time in seconds (18 seconds)
  const [isRunning, setIsRunning] = useState(false);

  // Format time as mm:ss
  const formatTime = (time) => {
    const minutes = String(Math.floor(Math.abs(time) / 60)).padStart(2, '0');
    const seconds = String(Math.abs(time) % 60).padStart(2, '0');
    return `${time < 0 ? "-" : ""}${minutes}:${seconds}`;
  };

  // Countdown effect
  useEffect(() => {
    if (!isRunning) return;
    const timerInterval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clear interval when component unmounts or timer stops
    return () => clearInterval(timerInterval);
  }, [isRunning]);

  // Toggle start/stop
  const toggleTimer = () => setIsRunning((prev) => !prev);

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/feedback');
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

  return (
    <div className="Timer">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">Extraction Timer</div>

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
              <div className="dot filled" data-tooltip="Extraction Timer" onClick={handleTimer}></div>
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

        <div className={`frame-2 ${time < 0 ? "negative-background" : ""}`}>
          <div className={`coffee-cup ${isRunning ? "running" : ""}`}></div>
          <div className="text-wrapper-2">
            {formatTime(time)}
          </div>

          <img
            className="btn"
            alt="Btn"
            src={`/imagesTimer/${isRunning ? "btn.svg" : "btn2.svg"}`} // Toggle between play and pause icons
            onClick={toggleTimer} // Start/stop timer on button click
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="frame-wrapper">
          <div className="frame-3"
          onClick={handleContinue}
          style={{ cursor: 'pointer' }}>
            <div className="text-wrapper-3">Done</div>

            <img
              className="coffee-beans"
              alt="Coffee beans"
              src="/imagesTimer/coffee-beans@2x.png"
            />
          </div>
        </div>

        <div className="overlap-2">
          <img
            className="rectangle"
            alt="Rectangle"
            src="/imagesTimer/rectangle-51.svg"
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

export default Timer;
