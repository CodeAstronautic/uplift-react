import { useState } from "react";
import "./App.css";
import Demo from "./demo";

const App = () => {
  const [customer, setCustomer] = useState(0);
  const [text, setText] = useState("uplift");

  const handleIn = () => {
    setCustomer(customer + 1);
  };
  const handleClick = () => {
    setText("uplkift 1");
  };
  return (
    <div>
      <h1>{text}</h1>
      <h1>{customer}</h1>
      <button onClick={handleIn}> Increment</button>
      <button onClick={() => setCustomer(customer - 1)}> minus</button>
      <button onClick={handleClick}> Text 123</button>

      {/* <Demo /> */}
    </div>
  );
};

export default App;
