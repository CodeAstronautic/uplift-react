import React from "react";
import './App.css';
import Counter from "./Counter";
import Calculator from './Calculator';

function App() {
    return (
    <div className="App">
      <header className="App-header">
      <h2>Welcome to my Calculator :)</h2>
      <Calculator />
      </header>
    </div>
  );
}

export default App;
