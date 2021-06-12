import { useState,useEffect } from "react";
import "./App.css";
import Demo from "./demo";
import axios from "axios"
const App = () => {
  const [customer, setCustomer] = useState(0);
  const [text, setText] = useState("uplift");

  // const handleIn = () => {
  //   setCustomer(customer + 10);
  // };
  // const handleClick = () => {
  //   setText("uplkift 1");
  // };

  useEffect(() => {
    axios
      .get("https://api.first.org/data/v1/countries")
      .then((res) => {
        setText(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(
    Object.entries(text).map((D) => {
      console.log(D[1].country);
    })
  );
  return (
    <div style={{ textAlign: "center" }}>
      <table>
        <tr>
          <th>Country</th>
        </tr>
        {Object.entries(text).map((d) => {
            return (
              <tr>
                <td>{d[1].country}</td>
              </tr>
            );
          })}
      </table>
      {/* <h1>{customer}</h1>
      <button onClick={handleIn}> Increment</button>
      <button onClick={() => setCustomer(customer - 1)}> minus</button>
      <button onClick={handleClick}> Text 123</button>

      {/* <Demo /> */}
    </div>
  );
};

export default App;
