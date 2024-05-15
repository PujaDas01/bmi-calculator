import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');


  const calculateBMI = () => {
    console.log('Button Fired!');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>BMI Calculator</h1>
        </div>
        <div className="input-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button className="button" onClick={calculateBMI}>
            Calculate BMI
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;