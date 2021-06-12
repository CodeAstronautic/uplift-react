import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  // const [customer, setCustomer] = useState(0);
  const [text, setText] = useState("uplift");

  // const handleIn = () => {
  //   setCustomer(customer + 10);
  // };
  // const handleClick = () => {
  //   setText("uplkift 1");
  // };

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/gov/india")
      .then((res) => {
        setText(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
console.log(text , "text")
  return (
    <div style={{ textAlign: "center" }}>
      <table>
        <tr>
          <th>state</th>
          <th>recovered</th>
          <th>deaths</th>
        </tr>
        {text?.states &&
          text?.states?.map((d) => {
            return (
              <tr>
                <td>{d.state}</td>
                <td>{d.recovered}</td>
                <td>{d.deaths}</td>
              </tr>
            );
          })}
      </table>
      {/* <h1>{customer}</h1>
      <button onClick={handleIn}> Increment</button>
      <button onClick={() => setCustomer(customer - 1)}> minus</button>
      <button onClick={handleClick}> Text 123</button> */}
    </div>
  );
};

export default App;
