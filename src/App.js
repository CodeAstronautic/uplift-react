import { React, useState } from "react";
import "./App.css";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  function add() {
    setTotal(number1 + number2);
  }
  function subtract() {
    setTotal(number1 - number2);
  }
  function Multiply() {
    setTotal(number1 * number2);
  }
  function devide() {
    setTotal(number1 / number2);
  }

  function Mod() {
    setTotal(number1 % number2);
  }
  return (
    <div className="App">
      <h1>Calculator</h1>

      <div className="number-inputs">
        <input
          type="number"
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder="First Number"
        />
        <input
          type="number"
          onChange={(e) => setNumber2(+e.target.value)}
          placeholder="Second Number"
        />
      </div>
      <div className="btn">
        <button className="btn-1" onClick={add}>
          Addition
        </button>
        <button className="btn-2" onClick={subtract}>
          Subtract
        </button>
        <button className="btn-3" onClick={Multiply}>
          Multiply
        </button>
        <button className="btn-4" onClick={devide}>
          Devide
        </button>
        <button className="btn-5" onClick={Mod}>
          Modulo
        </button>
      </div>
      <h2>{total}</h2>
    </div>
  );
}
export default App;
