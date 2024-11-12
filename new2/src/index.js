// index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './LandingPage/LandingPage';
import DrinkSelect from './DrinkSelect/DrinkSelect';
import ExtractionSettings from './ExtractionSettings/ExtractionSettings';
import Timer from './Timer/Timer';
import Feedback from './Feedback/Feedback';
import Menu from './Menu/Menu';
import reportWebVitals from './reportWebVitals';

const App = () => {
  const [currentPage, setCurrentPage] = useState('LandingPage');

  const renderPage = () => {
    switch (currentPage) {
      case 'LandingPage':
        return <LandingPage switchPage={setCurrentPage} />;
      case 'DrinkSelect':
        return <DrinkSelect switchPage={setCurrentPage} />;
      case 'ExtractionSettings':
        return <ExtractionSettings switchPage={setCurrentPage} />;
      case 'Timer':
        return <Timer switchPage={setCurrentPage} />;
      case 'Feedback':
        return <Feedback switchPage={setCurrentPage} />;
      case 'Menu':
        return <Menu switchPage={setCurrentPage} />;
      default:
        return <LandingPage switchPage={setCurrentPage} />;
    }
  };

  return <div>{renderPage()}</div>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
