import React,{useState} from "react";

const Cal=()=>
{
    const[number1,setNumber1]=useState(0);
    const[number2,setNumber2]=useState(0);
    const[total,setTotal]=useState(0);
    

    const add=()=>{

        setTotal(number1+number2);
        

    }

    const mul=()=>{

        setTotal(number1*number2);
      

    }

    const div=()=>{

        setTotal(number1/number2);
        

    }
  
    return(
        <div className="calculator">
            <h1>Basic Calculation</h1>
        
            <div>
                <input type="number" 
                 placeholder="First Number"
                value={number1}
                onChange={e=> setNumber1(+e.target.value)}
                />
                <input type="number"
                 placeholder="Second Number"
               
                 value={number2}
                 onChange={e=> setNumber2(+e.target.value)}
                 />

             </div>
             <button onClick={add}>ADD</button>
             <button onClick={mul}>MULTIPLY </button>
             <button onClick={div}>DIVIDE</button>
            

             <h2>{total}</h2>
           

             
       </div>
      
 

    )

};

export default Cal;