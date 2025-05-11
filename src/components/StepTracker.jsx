/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import './StepTracker.css';

function ProgressBar({ progress, goal, steps }) {
  return (
    <div className="progress-bar-outer">
      <div
        className="progress-bar-inner"
        style={{ width: `${progress}%` }}
      ></div>
      <div className="progress-bar-label">
        {steps} / {goal} steps
      </div>
    </div>
  );
}

function StepCalculator() {
  const [height, setHeight] = useState('');
  const [minutes, setMinutes] = useState('');
  const [result, setResult] = useState(null);

  const calculateSteps = (e) => {
    e.preventDefault();
    const h = parseFloat(height);
    const min = parseFloat(minutes);
    if (!h || !min) {
      setResult(null);
      return;
    }
    const stepLength = h * 0.415 / 100;
    const speed = 1.4;
    const time = min * 60;
    const distance = speed * time;
    const steps = Math.round(distance / stepLength);
    setResult(steps);
  };

  return (
    <div className="step-calculator">
      <h3>Step Calculator</h3>
      <form onSubmit={calculateSteps}>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} required />
        </label>
        <label>
          Time (minutes):
          <input type="number" value={minutes} onChange={e => setMinutes(e.target.value)} required />
        </label>
        <button type="submit">Calculate Steps</button>
      </form>
      {result !== null && (
        <div className="calc-result">Estimated Steps: <b>{result}</b></div>
      )}
    </div>
  );
}

export default function StepTracker() {
  const [goal, setGoal] = useState(10000);
  const [steps, setSteps] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  const [timer, setTimer] = useState(null);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  // ... (keep all the existing StepTracker logic)

  return (
    <div className="step-tracker-app">
      <div className="goal-input">
        <label>
          Goal Steps:
          <input type="number" value={goal === 0 ? '' : goal} onChange={handleGoalChange} min="1" />
        </label>
      </div>
      <div className="meter-container">
        <ProgressBar progress={animatedProgress} goal={goal} steps={steps} />
      </div>
      <div className="steps-input">
        <label>
          Current Steps:
          <input type="number" value={steps === 0 ? '' : steps} onChange={handleStepsChange} min="0" />
        </label>
      </div>
      <div className="duration">
        Duration: {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
      </div>
      <div className="controls">
        {!isTracking ? (
          <button onClick={startTracking}>Start Tracking</button>
        ) : (
          <button onClick={stopTracking}>Stop Tracking</button>
        )}
        <button onClick={resetTracking}>Reset</button>
      </div>
      <StepCalculator />
    </div>
  );
}