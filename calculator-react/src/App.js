import React,{ useState } from 'react';
import './App.css';


const App = () => {
    const [result, setResult] = useState("");

const handleClick= (e) => {
    setResult(result.concat(e.target.name));
}
const clearall = () => {
    setResult("");
}
const backspace = () =>{
    setResult(result.slice(0,result.length-1));
}
const total = () =>{
try{

    setResult(eval(result).toString());
    
}catch(err){
    setResult("Error");
}
    
}


    return (
        <>
        <div class="whole-background">
      <h1><u>Calculator</u></h1>
      <div class="calculator">
        <div class="output">
          <input type="text" name="screen" id="screen" value= {result} />
        </div>

        <div class="button-background">
          <table>
            <tr>
              <td><button name= "7" onClick={handleClick} >7</button></td>
              <td><button name= "8" onClick={handleClick} >8</button></td>
              <td><button name= "9" onClick={handleClick} >9</button></td>
              <td><button name= "/" onClick={handleClick} >&divide;</button></td>
            </tr>

            <tr>
              <td><button name= "4" onClick={handleClick} >4</button></td>
              <td><button name= "5" onClick={handleClick} >5</button></td>
              <td><button name= "6" onClick={handleClick} >6</button></td>
              <td><button name= "*" onClick={handleClick} >*</button></td>
            </tr>

            <tr>
              <td><button name= "1" onClick={handleClick} >1</button></td>
              <td><button name= "2" onClick={handleClick}>2</button></td>
              <td><button name= "3" onClick={handleClick}>3</button></td>
              <td><button name= "+" onClick={handleClick}>+</button></td>
            </tr>

            <tr>
              <td><button name= "." onClick={handleClick}>.</button></td>
              <td><button name= "-" onClick={handleClick}>-</button></td>
              <td><button name= "0" onClick={handleClick}>0</button></td>
              <td><button onClick={backspace} >C</button></td>
            </tr>
          </table>
        </div>

        <div class="span-two">
          <table>
            <tr>
              <td><button onClick={total}>=</button></td>
              <td><button onClick={clearall} >AC</button></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
            
        </>
    );
}

export default App;
