import React from "react";
import {add,subract, multiply, divide,percent}  from './Calc'


function App(){
  return(
    <>
    <ul>
      <li>The sum of two numbers (40,4) is {add(40,4)}</li>
      <li>The diff of two numbers (40,4) is {subract(40,4)}</li>
      <li>The multiplication of two numbers (40,4) is {multiply(40,4)}</li>
      <li>The division of two numbers (40,4) is {divide(40,4)}</li>
      <li>The 40% of 4 is {percent(40,4)}%</li>
    </ul>
    </>
  )
}
export default App;
