import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Keynumber from './Components/Keynumber';


function App() {

  const [evalstring, setEvalstring] = useState("");
  const addexpression =(expression) =>{
    setEvalstring(evalstring + expression);
    
  }
  const evalute =() =>{
    setEvalstring(eval(evalstring));
  } 


  return (
    <div className="App">
      <h1>Input values, this will be fun!🥳</h1>
      <div className="row">
      <div className="input-wrapper">
          <input type="text" className="input" id="str-input" value={evalstring} readOnly={true}/>
        </div>
        <div>
        <div className="keynum" style={{width: "50%"}}>
          <button className="keynum-btn" onClick={() => setEvalstring("")}>C</button>
        </div>
        <div className="keynum">
        <button className="keynum-btn" onClick={() => addexpression("**")}>^</button>
      </div>
      <div className="keynum">
        <button className="keynum-btn" onClick={() => addexpression("*100")}>%</button>
      </div>
      </div> 
      <div>
      <Keynumber number = "1" onClick={() => addexpression("1")}/>
      <Keynumber number = "2" onClick={() => addexpression("2")}/>
      <Keynumber number = "3" onClick={() => addexpression("3")}/>
      <div className="keynum">
        <button className="keynum-btn" onClick={() => addexpression("+")}>+</button>
      </div>
      </div>

      <div>
      <Keynumber number = "4" onClick={() => addexpression("4")}/>
      <Keynumber number = "5" onClick={() => addexpression("5")}/>
      <Keynumber number = "6" onClick={() => addexpression("6")}/>
      <div className="keynum">
        <button className="keynum-btn" onClick={() => addexpression("*")}>*</button>
      </div>
      </div>

      <div>
      <Keynumber number = "7" onClick={() => addexpression("7")}/>
      <Keynumber number = "8" onClick={() => addexpression("8")}/>
      <Keynumber number = "9" onClick={() => addexpression("9")}/>
      <div className="keynum">
      <button className="keynum-btn" onClick={() => addexpression("/")}>/</button>
      </div>
      </div>

      <div>
      <Keynumber number = "0" onClick={() => addexpression("0")} style={{width: "50%"}}/>
      <div className="keynum">
          <button className="keynum-btn" onClick={() => evalute()}>=</button>
        </div>
      <div className="keynum">
      <button className="keynum-btn" onClick={() => addexpression("-")}>-</button>
      </div>
      </div>     

    </div>
    </div>
  );
}

export default App;
