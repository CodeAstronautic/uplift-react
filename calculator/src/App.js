import './App.css';

import { useState } from 'react';

const App= ()=>{

  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [tot, setTotal]= useState(n1+n2); 

  const add=()=>{
    const a=parseInt(n1)+parseInt(n2);
    console.log(a);
    setTotal(a)
  };
  const mul=()=>{
    const a=parseInt(n1)*parseInt(n2);
    console.log(a);
    setTotal(a)
  };
  const div=()=>{
    const a=parseInt(n1)/parseInt(n2);
    console.log(a);
    setTotal(a)
  };
  

  return(
    
    <div className="container">
       <h1>Basic Calculator App</h1>
       <div class="calc">
       <label>Enter First Number </label> <br/> 
      <input id="n1" onChange={event => setN1(event.target.value)} type="number"/>
      <br></br> <br/> 
      <label>Enter Second Number  </label> 
      <input id="n2"onChange={event => setN2(event.target.value)} type="number"/><br></br>
      <div class="btn">
      <button onClick={add}>Add</button>
      <button onClick={mul}>Mul</button>
      <button onClick={div}>Div</button>
     
      </div>
      
      <h1>Result : {tot}</h1>
       </div>
      
    </div>
  );
};

export default App;
