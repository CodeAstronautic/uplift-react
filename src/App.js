import React, { useRef,useState } from "react";
import {add,sub, mul, div}  from './Calc'
import './App.css'

function App(){
  const [result,setResult] = useState()
  const [secondNumber,setSecondNumber] = useState()
  const firstValue=useRef()
  const secondValue=useRef()
  const addHandler=()=>{
    setResult(add(parseInt(firstValue.current.value),parseInt(secondValue.current.value)))
  }
  const subHandler=()=>{
    setResult(sub(parseInt(firstValue.current.value),parseInt(secondValue.current.value)))
  }
  const mulHandler=()=>{
    setResult(mul(parseInt(firstValue.current.value),parseInt(secondValue.current.value)))
  }
  const divHandler=()=>{
    setResult(div(parseInt(firstValue.current.value),parseInt(secondValue.current.value)))
  }
  return(
    <>
    <div className="container">
      <h1 className="title">Calculator</h1>
    <div className="inputFields">
      <div className="firstInputField">
    <label for="firstNumber">First Number</label>
    <br></br>
<input type="text" name="firstNumber"className="firstNumber" ref={firstValue}></input>
</div>
<br></br>
<div className="firstInputField">
<label for="secondNumber">Second Number</label>
    <br></br>
<input type="text" name="secondNumber" className="secondNumber" ref={secondValue}></input>
</div>
</div>
<div className="CalcButtons">
  <button id="btn" onClick={addHandler}>Add</button>
  <button id="btn" onClick={subHandler}>Subtract</button>
  <button id="btn" onClick={mulHandler}>Multiply</button>
  <button id="btn" onClick={divHandler}>Division</button>
</div>
<div className="resultContainer">
  <h3>The result is {result}</h3>
</div>
</div>
    </>
  )
}
export default App;
