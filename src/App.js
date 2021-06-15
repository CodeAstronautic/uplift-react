import React from "react";
import {addition,subtraction, multiplication, division}  from './Calc'


function App(){
  return(
    <>
    <ul>
      <li>The sum of two numbers is {addition(40,4)}</li>
      <li>The diff of two numbers is {subtraction(40,4)}</li>
      <li>The multiplication of two numbers is {multiplication(40,4)}</li>
      <li>The division of two numbers is {division(40,4)}</li>
    </ul>
    </>
  )
}
export default App;
