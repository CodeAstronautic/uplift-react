import { useState } from "react";
import "./App.css";
const App= ()=>{
    const add=()=>{
      const a=parseInt(num1)+parseInt(num2);
      console.log(a);
      setTotal(a)
    };
    const mul=()=>{
      const a=parseInt(num1)*parseInt(num2);
      console.log(a);
      setTotal(a)
    }
    const div=()=>{
      const a=parseFloat(num1)/parseFloat(num2);
      console.log(a);
      setTotal(a.toPrecision(2))
    }
    const per=()=>{
      const a=parseInt(num1)*parseInt(num2)*0.01;
      console.log(a);
      setTotal(num2+"% of "+num1+" is "+a);
    }
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [total, setTotal]= useState(num1+num2); 
    return(
      <div className="container">
        <h1>Simple Calculator Application</h1>
        <label>Num1</label>
        <input id="num1" onChange={event => setNum1(event.target.value)} type="number"/>
        <br></br>
        <label>Num2</label>
        <input id="num2"onChange={event => setNum2(event.target.value)} type="number"/><br></br>
        <button onClick={add}>ADD</button>
        <button onClick={mul}>MUL</button>
        <button onClick={div}>DIV</button>
        <button onClick={per}>PER</button>
        <h1>{total}</h1>
      </div>
    );
  };

export default App;
