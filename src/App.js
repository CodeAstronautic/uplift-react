import './App.css';
import { useState } from 'react';


const App=()=> {

  const [state, setState]=useState("");
  

  const sum=(e)=>{

    const value=e.target.value ;

    if(value==="="){
      try{setState(eval(state));}
      catch(err){
      setState("math error");}

    }else if(value==="C"){
      setState("")
    }else if(value==="Del"){
      setState(state.substr(0,state.length-1));
    }
    else{
    setState(state + value)
    }
  };
  

  return (
    <div className="body">
      <h1>Calculator</h1>
      <div className="fields">
        {state}
        
      </div>
      <div className="buttons">
        <div className="row-1">
          <button onClick={sum} value="C">C</button>
          <button onClick={sum} value="Del">Del</button>
          <button onClick={sum} value="/">/</button>
          <button onClick={sum} value="*">*</button>
        </div>
        <div className="row-2">
          <button onClick={sum} value="7">7</button>
          <button onClick={sum} value="8">8</button>
          <button onClick={sum} value="9">9</button>
          <button onClick={sum} value="-">-</button>
        </div>
        <div className="row-3">
          <button onClick={sum} value="4">4</button>
          <button onClick={sum} value="5">5</button>
          <button onClick={sum} value="6">6</button>
          <button onClick={sum} value="+">+</button>
        </div>
        <div className="row-4">
          <button onClick={sum} value="1">1</button>
          <button onClick={sum} value="2">2</button>
          <button onClick={sum} value="3">3</button>
          <button onClick={sum} value="%">%</button>
        </div>
        <div className="row-5">
          <button id="zero" onClick={sum} value="0">0</button>
          <button onClick={sum} value=".">.</button>
          <button id="equal" onClick={sum} value="=">=</button>
        </div>
      </div>
    
    </div>
  );
  
}

export default App;
