// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import LandingPage from './LandingPage/LandingPage';
import DrinkSelect from './DrinkSelect/DrinkSelect';
import ExtractionSettings from './ExtractionSettings/ExtractionSettings';
import Timer from './Timer/Timer';
import Feedback from './Feedback/Feedback';
import Menu from './Menu/Menu';
import reportWebVitals from './reportWebVitals';
import { CoffeeProvider } from './context/CoffeeContext';

const App = () => {
  return (
    <React.StrictMode>
      <CoffeeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/drink-select" element={<DrinkSelect />} />
            <Route path="/extraction-settings" element={<ExtractionSettings />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </Router>
      </CoffeeProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();