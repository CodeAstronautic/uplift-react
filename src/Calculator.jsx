import React from "react";

function Calculator(){
    const [variables,setVariables] = React.useState({
        x:0,
        y:0
    });
    const [ans,setAns] = React.useState('');
    function updateVariables(event){
        const variable = event.target.name;
        const val = event.target.value;
        setVariables({...variables,[variable]:Number(val)});
    }
    function add(){
        setAns(variables.x+variables.y);
    }

    function mul(){
        setAns(variables.x*variables.y);
    }

    function percent(){
        setAns(variables.x/variables.y*100+'%');
    }

    function div(){
        setAns(variables.x/variables.y);
    }
    return (
        <div className="calculator">
            <input onChange={updateVariables} type="number" placeholder="Enter First Number" name="x"/>
            <input onChange={updateVariables} type="number" placeholder="Enter Second Number" name="y"/>
            <button onClick={add}>Addition</button>
            <button onClick={mul}>Multiplication</button>
            <button onClick={percent}>Percentage</button>
            <button onClick={div}>Divide</button>
            <h1 className="heading">{ans}</h1>
        </div>
    )
}
export default Calculator;