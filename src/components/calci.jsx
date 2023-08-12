import React from "react";
import { Link } from "react-router-dom";





import  { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    const value = e.target.value;

    if (value === '=') {
      try {
        const evalResult = eval(result);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setResult('');
    } else {
      setResult(result + value);
    }
  };

  return (
    <div className="container">
      <h3>Calculator</h3>
      <input type="text" value={result} readOnly />
      <br />
      <button className="calciButton"  value="7" onClick={handleClick}>7</button>
      <button className="calciButton" value="8" onClick={handleClick}>8</button>
      <button className="calciButton" value="9" onClick={handleClick}>9</button>
      <button className="calciButton" value="+" onClick={handleClick}>+</button>
      <br />
      <button className="calciButton" value="4" onClick={handleClick}>4</button>
      <button className="calciButton" value="5" onClick={handleClick}>5</button>
      <button className="calciButton" value="6" onClick={handleClick}>6</button>
      <button className="calciButton" value="-" onClick={handleClick}>-</button>
      <br />
      <button className="calciButton" value="1" onClick={handleClick}>1</button>
      <button className="calciButton" value="2" onClick={handleClick}>2</button>
      <button className="calciButton" value="3" onClick={handleClick}>3</button>
      <button className="calciButton" value="*" onClick={handleClick}>*</button>
      <br />
      <button className="calciButton" value="0" onClick={handleClick}>0</button>
      <button className="calciButton" value="." onClick={handleClick}>.</button>
      <button className="calciButton" value="=" onClick={handleClick}>=</button>
      <button className="calciButton" value="/" onClick={handleClick}>/</button>
      <br />
      <button className="calciButton"value="C" onClick={handleClick}>C</button>
      <hr></hr>
      <Link to ="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Calculator;
