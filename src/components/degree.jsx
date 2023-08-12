
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const TemperatureConverter = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const convertToKelvin = () => {
    const degrees = parseFloat(input);
    const kelvin = degrees + 273.15;
    setResult(kelvin + ' K');
  };

  const convertToDegrees = () => {
    const kelvin = parseFloat(input);
    const degrees = kelvin - 273.15;
    setResult(degrees + ' °C');
  };

  return (
    <div className="container">
      <h3>Temperature Converter</h3>
      <label>
        Enter Degrees  :
        <input type="number" value={input} onChange={handleInputChange} />
      </label>
      <br />
      <button className="convertor" onClick={convertToKelvin}>Convert to Kelvin</button>
      <button className="convertor" onClick={convertToDegrees}>Convert to Celsius</button>
      <br />
      <span className="resultOf">{result}</span>
      <Link to ="/">
        <button>Home</button>
      </Link>
    </div>
    
  );
};

export default TemperatureConverter;
