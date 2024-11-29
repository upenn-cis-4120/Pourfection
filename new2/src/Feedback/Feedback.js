import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Feedback.css";
import { useCoffeeParams } from '../context/CoffeeContext';

export const Feedback = ({ switchPage }) => {
  const { coffeeParams, updateParams } = useCoffeeParams();
  const [suggestion, setSuggestion] = useState("");
  const [smoothness, setSmoothness] = useState(0);
  const [strength, setStrength] = useState(0);
  const [aroma, setAroma] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [bitterness, setBitterness] = useState(0);
  const [overallEnjoyment, setOverallEnjoyment] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [optimizationResult, setOptimizationResult] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleMenu = () => {
    navigate('/menu'); // Assuming '/menu' is the route for the menu page
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

  const callGemini = async (prompt) => {
    const API_KEY = 'AIzaSyBC2Ekvy7t4URUiW4DLIT0riTTlIIu8mSY';
    const API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';
    
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          role: "user",
          parts: [{ text: prompt }]
        }],
        generationConfig: {
          temperature: 0.9,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        }
      })
    });

    if (!response.ok) throw new Error(`API call failed: ${response.status}`);
    return await response.json();
  };

  const formatGeminiResponse = (responseText) => {
    const lines = responseText.split('\n');
    const parameterLine = lines[0];
    const explanation = lines.slice(1).join('\n').trim();
    
    // Map short parameter names to their full names
    const parameterNames = {
      'grind': 'Grind size',
      'weight': 'Coffee Weight',
      'pressure': 'Pressure',
      'time': 'Extraction Time'
    };

    // Replace the short parameter name with the full name
    const formattedParameter = Object.entries(parameterNames).reduce(
      (line, [short, full]) => line.replace(short + ':', full + ':'),
      parameterLine
    );
    
    return {
      parameter: formattedParameter,
      explanation: explanation
    };
  };

  const handleSubmitFeedback = async () => {
    try {
      setIsLoading(true);
      
      // Check if feedback is positive
      const isGoodFeedback = suggestion.toLowerCase().match(/good|great|nice|perfect|excellent|amazing|love/);
      const hasGoodRatings = overallEnjoyment >= 4;

      if (isGoodFeedback || hasGoodRatings) {
        setOptimizationResult("Your coffee parameters are already optimized!");
        setPopupContent(
          <div className="optimization-result">
            <h3>Great Job!</h3>
            <p className="explanation">Your current settings are producing excellent results. Keep using these parameters for consistently good coffee!</p>
          </div>
        );
        setShowPopup(true);
        setFeedbackSubmitted(true);
        setIsLoading(false);
        return;
      }

      // Use context values instead of querying DOM
      const { weight, grindSize, pressure, extractionTime } = coffeeParams;

      // First analyze the text feedback
      let parameterToAdjust;
      if (suggestion.toLowerCase().includes('flavor') || suggestion.toLowerCase().includes('aroma')) {
        parameterToAdjust = 'grind';
      } else if (suggestion.toLowerCase().includes('weak') || suggestion.toLowerCase().includes('watery')) {
        parameterToAdjust = 'weight';
      } else if (suggestion.toLowerCase().includes('fast') || suggestion.toLowerCase().includes('slow')) {
        parameterToAdjust = 'time';
      } else if (suggestion.toLowerCase().includes('pressure') || suggestion.toLowerCase().includes('flow')) {
        parameterToAdjust = 'pressure';
      } else {
        // Fallback to ratings if no clear indication in text
        if (aroma < 3) {
          parameterToAdjust = 'grind';  // Changed from bitterness to aroma
        } else if (strength < 2) {
          parameterToAdjust = 'weight';
        } else if (overallEnjoyment < 3) {
          parameterToAdjust = 'time';
        } else {
          parameterToAdjust = 'pressure';
        }
      }

      // Format ratings, showing "Not rated" for 0 values
      const formatRating = (value) => value === 0 ? "Not rated" : `${value}/5`;

      const prompt = `As a coffee expert, analyze this feedback about an espresso shot and provide personalized advice:

Your Feedback: "${suggestion}"

Your Current Settings:
- Coffee Weight: ${weight}
- Grind Size: ${grindSize}
- Pressure: ${pressure}
- Extraction Time: ${extractionTime}

How you rated your coffee:
Smoothness: ${formatRating(smoothness)}
Strength: ${formatRating(strength)}
Aroma: ${formatRating(aroma)}
Temperature: ${formatRating(temperature)}
Overall: ${formatRating(overallEnjoyment)}

Based on your feedback${suggestion ? " and ratings" : ""}, I'll suggest an adjustment to the ${parameterToAdjust}. I'll focus primarily on your text feedback${suggestion ? " and consider any ratings you provided as additional context" : ", since you haven't provided any ratings"}.

Format your response as:
${parameterToAdjust}: [number]

[explanation addressing your specific feedback and how this change will improve your coffee experience]`;

      const response = await callGemini(prompt);
      const responseText = response.candidates[0].content.parts[0].text;
      
      const { parameter, explanation } = formatGeminiResponse(responseText);
      
      // Update global parameters based on Gemini's response
      const paramMatch = parameter.match(/([\w\s]+):\s*(\d+\.?\d*)/);
      if (paramMatch) {
        const [_, paramName, value] = paramMatch;
        const paramKey = {
          'Coffee Weight': 'weight',
          'Grind size': 'grindSize',
          'Pressure': 'pressure',
          'Extraction Time': 'extractionTime'
        }[paramName.trim()];
        
        if (paramKey) {
          updateParams({ [paramKey]: `${value}${paramKey === 'weight' ? 'g' : paramKey === 'pressure' ? ' bars' : paramKey === 'extractionTime' ? 's' : ''}` });
        }
      }

      setOptimizationResult(responseText);
      setPopupContent(
        <div className="optimization-result">
          <h3>Recommended Change</h3>
          <p className="parameter-change">{parameter}</p>
          <h3>Explanation</h3>
          <p className="explanation">{explanation}</p>
        </div>
      );
      setShowPopup(true);
      setFeedbackSubmitted(true);
      
    } catch (error) {
      setPopupContent(`Error: ${error.message}`);
      setShowPopup(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseFeedbackPopup = () => {
    setShowPopup(false);
    setPopupContent("");
    if (feedbackSubmitted) {
      navigate('/drink-select');
    }
  };


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
                  defaultValue={coffeeParams.weight}
                  onChange={(e) => updateParams({ weight: e.target.value })}
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
              defaultValue={coffeeParams.grindSize}
              onChange={(e) => updateParams({ grindSize: e.target.value })}
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
              defaultValue={coffeeParams.pressure}
              onChange={(e) => updateParams({ pressure: e.target.value })}
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
              defaultValue={coffeeParams.extractionTime}
              onChange={(e) => updateParams({ extractionTime: e.target.value })}
            />
          </div>
        </div>

        <div className="text-wrapper-6">Questionnaire</div>

        <div className="overlap-7">
          <div className="suggestions">
            <div className="question">
              <div className="question-title">Smoothness</div>
              <div className="scale">
                {[1,2,3,4,5].map((value) => (
                    <span
                        key={`smoothness-${value}`}
                        className={`dot ${smoothness >= value ? 'filled' : ''}`}
                        onClick={() => setSmoothness(value)}
                    ></span>
                ))}
              </div>
            </div>

            {/* Strength/Intensity */}
            <div className="question">
              <div className="question-title">Strength/Intensity</div>
              <div className="scale">
                {[1,2,3,4,5].map((value) => (
                    <span
                        key={`strength-${value}`}
                        className={`dot ${strength >= value ? 'filled' : ''}`}
                        onClick={() => setStrength(value)}
                    ></span>
                ))}
              </div>
            </div>

            {/* Aroma and Flavor Clarity */}
            <div className="question">
              <div className="question-title">Aroma</div>
              <div className="scale">
                {[1,2,3,4,5].map((value) => (
                    <span
                        key={`aroma-${value}`}
                        className={`dot ${aroma >= value ? 'filled' : ''}`}
                        onClick={() => setAroma(value)}
                    ></span>
                ))}
              </div>
            </div>

            {/* Temperature */}
            <div className="question">
              <div className="question-title">Temperature</div>
              <div className="scale">
                {[1,2,3,4,5].map((value) => (
                    <span
                        key={`temperature-${value}`}
                        className={`dot ${temperature >= value ? 'filled' : ''}`}
                        onClick={() => setTemperature(value)}
                    ></span>
                ))}
              </div>

            </div>

            {/* Bitterness */}
            <div className="question">
              <div className="question-title">Bitterness</div>
              <div className="scale">
                {[1,2,3,4,5].map((value) => (
                    <span
                        key={`bitterness-${value}`}
                        className={`dot ${bitterness >= value ? 'filled' : ''}`}
                        onClick={() => setBitterness(value)}
                    ></span>
                ))}
              </div>
            </div>

            {/* Overall Enjoyment */}
            <div className="question">
              <div className="question-title">Overall Enjoyment</div>
              <div className="scale">
                {[1,2,3,4,5].map((value) => (
                    <span
                        key={`overall-${value}`}
                        className={`dot ${overallEnjoyment >= value ? 'filled' : ''}`}
                        onClick={() => setOverallEnjoyment(value)}
                    ></span>
                ))}
              </div>
            </div>

          <textarea
            className="feedback-input-container"
            placeholder="Enter your feedback here..."
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            style={{ resize: "none" }}
          />
          <img
            className="rectangle-5"
            alt="Rectangle"
            src="/imagesFeedback/rectangle-49.svg"
            onClick={() => switchPage('DrinkSelect')}
            style={{ cursor: 'pointer' }}
          />


          </div>
          <img
            className="rectangle-5"
            alt="Rectangle"
            src="/imagesFeedback/rectangle-49.svg"
            onClick={() => switchPage('DrinkSelect')}
            style={{ cursor: 'pointer' }}
          />
          <div 
            className="submit-feedback-wrapper" 
            onClick={handleSubmitFeedback} 
            style={{ cursor: 'pointer' }}
            role="button"
            onKeyDown={(e) => e.key === 'Enter' && handleSubmitFeedback()}
            tabIndex={0}
          >
            Submit Feedback
          </div>

          {showPopup && (
          <div className="popup" onClick={handleCloseFeedbackPopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={handleCloseFeedbackPopup}>&times;</span>
              {typeof popupContent === 'string' ? <p>{popupContent}</p> : popupContent}
            </div>
          </div>
        )}

        {isLoading && (
          <div className="popup">
            <div className="popup-content">
              <p>Analyzing your coffee parameters...</p>
            </div>
          </div>
        )}

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
              <div className="dot" data-tooltip="Initialization" onClick={handleInitialization}></div>
              <div className="dot" data-tooltip="Drink Selection" onClick={handleDrink}></div>
              <div className="dot" data-tooltip="Extraction Settings" onClick={handleExtrSettings}></div>
              <div className="dot" data-tooltip="Extraction Timer" onClick={handleTimer}></div>
              <div className="dot filled" data-tooltip="Feedback" onClick={handleFeedback}></div>
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