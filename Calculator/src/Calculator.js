import React,{useState} from "react";
import "./Calculator.css"

const Calculator = () => {
    const [input1, setInput1] = useState()
    const [input2, setInput2] = useState()
    const [result, setResult] = useState()
   
    const text1 =(e)=>{
        setInput1(e.target.value)
    }

    const text2 =(e)=>{
        setInput2(e.target.value)
    }
   
    const add =(e)=>{
        const x=Number(input1)
        const y=Number(input2)
       const add=x+y
        setResult(add)
    }

     const subtract =(e)=>{
        const x=Number(input1)
        const y=Number(input2)
       const minus=x-y
        setResult(minus)
    }
        
    const multiply =(e)=>{
        const x=Number(input1)
        const y=Number(input2)
       const cross=x*y
        setResult(cross)

       
    }
    const divide =(e)=>{
        const x=Number(input1)
        const y=Number(input2)
       const div=x/y
        setResult(div)
       
    }
    const remainder =(e)=>{
        const x=Number(input1)
        const y=Number(input2)
       const rem=x%y
        setResult(rem)
       
    }
    


    return (
        <div>
             <div className="container">
                <input type="number" placeholder="Enter Number 1" onChange={text1}/>
            </div>
            <div className="container">
                 <input type="number" placeholder="Enter Number 2" onChange={text2}/>
            </div>
        <p>Result: {result}</p>

        <button onClick={add}>+</button> 
        <button onClick={subtract}>-</button> 
        <button onClick={multiply}>*</button> 
        <button onClick={divide}>/</button> 
        <button onClick={remainder}>%</button> 
        </div>
    )
}

export default Calculator