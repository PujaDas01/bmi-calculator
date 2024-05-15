import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight.trim() === '' || height.trim() === '') {
      alert('Please enter both weight and height');
      return;
    }
  
    if (isNaN(weight) || isNaN(height)) {
      alert('Please enter valid numbers for weight and height');
      return;
    }
  
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (weightNum === 0 || heightNum === 0 || weight.includes('e') || height.includes('e') || isNaN(weightNum) || isNaN(heightNum)) {
      alert('Please enter valid non-zero numbers for weight and height');
      return;
    }
  
    if (weightNum <= 0 || heightNum <= 0) {
      alert('Please enter positive numbers for weight and height');
      return;
    }
  
    let bmiValue = (weightNum / ((heightNum / 100) * (heightNum / 100))).toFixed(2);
    setBMI(bmiValue);
  
    let bmiCategory = '';
    if (bmiValue < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      bmiCategory = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obese';
    }
  
    setCategory(bmiCategory);
  };

  const clearFields = () => {
    setWeight('');
    setHeight('');
    setBMI('');
    setCategory('');
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
            inputMode="numeric"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            inputMode="numeric"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button className="button calculate" onClick={calculateBMI}>
            Calculate BMI
          </button>
          <button className="button clear" onClick={clearFields}>
            Clear
          </button>
        </div>
        {bmi && (
          <div className="result">
            <h2>Your BMI is {bmi}</h2>
            <p>You are categorized as: {category}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;