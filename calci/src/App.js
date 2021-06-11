import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [result, setResult] = useState("");

  const click = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };
  const zero = () => {
    setResult(result.slice(0, -1));
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Calculator</h1>
        <form action="">
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button onClick={clear} id="clear">
            Clear
          </button>
          <button onClick={zero}>C</button>

          <button name="/" onClick={click}>
            &divide;
          </button>
          <button name="7" onClick={click}>
            7
          </button>
          <button name="8" onClick={click}>
            8
          </button>
          <button name="9" onClick={click}>
            9
          </button>
          <button name="*" onClick={click}>
            &times;
          </button>
          <button name="4" onClick={click}>
            4
          </button>
          <button name="5" onClick={click}>
            5
          </button>
          <button name="6" onClick={click}>
            6
          </button>
          <button name="-" onClick={click}>
            &ndash;
          </button>
          <button name="1" onClick={click}>
            1
          </button>
          <button name="2" onClick={click}>
            2
          </button>
          <button name="3" onClick={click}>
            3
          </button>
          <button name="+" onClick={click}>
            +
          </button>
          <button name="0" onClick={click}>
            0
          </button>
          <button name="." onClick={click}>
            .
          </button>
          <button onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
