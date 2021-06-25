import React from "react";
import {useState} from "react";
import Nav from "./Navbar";
import "./login.css"


const Login =()=>{
    const [name, setName]= useState("");
    const [pass, setPass]= useState("");
    const handleChange=(event)=>{
        setName(event.target.value);
    };

return(
    <div className="blue">
       <Nav/>
       <form action="/" className="booo">
           <h1 className="lhead">Login Here</h1>
           <input
             type="text"
             placeholder="Name"
             onChange={handleChange}
             value={name}
             className="name"
             required
             />
           <input
             type="password"
             placeholder="Password"
             onChange={(event)=>{setPass(event.target.value)}}
             value={pass}
             className="pass"
             required
            />
            <input
             type="submit"
             value="SUBMIT"
             className="btn"
            />
       </form>
    </div>
);
};

export default Login;