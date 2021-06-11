import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(num1 + num2);

  function calAdd() {
    setTotal(num1 + num2)
  }

  function calSub() {
    setTotal(num1 - num2)
  }

  function calMul() {
    setTotal(num1 * num2)
  }

  function calDiv() {
    setTotal(num1 / num2)
  }

  return (
    <div>
      <div className="input">
        <input type="number" value={num1} onChange={e => setNum1(+e.target.value)}
          placeholder="0" />
        <input type="number" value={num2} onChange={e => setNum2(+e.target.value)}
          placeholder="0" />
      </div>
      <h3>Total: {total}</h3>
      <button onClick={calMul}>&times;</button>
      <button onClick={calAdd}>+</button>
      <button onClick={calSub}>-</button>
      <button onClick={calDiv}>/</button>
    </div>
  );
};

export default App;
