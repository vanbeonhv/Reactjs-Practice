import Button from "./Button" 
import React from "react";
import './CalculatorStyle.css';

const Calculator = () => {
  return (
    <div className="container-fluid px-0 bg-c">
      <div className="wrapper">
        <p className='result'></p>
        <div><Button name="+" className="func-pad"></Button></div>
        <div><Button name="-" className="func-pad"></Button></div>
        <div><Button name="x" className="func-pad"></Button></div>
        <div><Button name="/" className="func-pad"></Button></div>
        <div><Button name="7" className="normal-pad"></Button></div>
        <div><Button name="8" className="normal-pad"></Button></div>
        <div><Button name="9" className="normal-pad"></Button></div>
        <div className="big-btn"><Button name="=" className="big-btn-1"></Button></div>
        <div><Button name="4" className="normal-pad"></Button></div>
        <div><Button name="5" className=""></Button></div>
        <div><Button name="6" className="normal-pad"></Button></div>
        <div><Button name="1" className="normal-pad"></Button></div>
        <div><Button name="2" className="normal-pad"></Button></div>
        <div><Button name="3" className="normal-pad"></Button></div>
        <div><Button name="0" className="normal-pad"></Button></div>
        <div><Button name="." className="normal-pad"></Button></div>
        <div><Button name="C" className="normal-pad"></Button></div>
        
      </div>
    </div>
  );
};

export default Calculator;
