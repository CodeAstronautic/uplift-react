import React, {useState} from "react";
import Nav from "./Navbar";

import "./register.css"
const Register =()=>{
    const [name, setName]= useState("");
    const [pass, setPass]= useState("");
    const [mail, setMail]= useState("");
    const handleChange=(event)=>{
        setName(event.target.value);
    };
return(
    <div>
         <Nav/>
         <form action="/login" className="booo">
           <h1 className="lhead">Resgister Here</h1>
           <input
             type="text"
             placeholder="Name"
             onChange={handleChange}
             value={name}
             className="name"
             required
             />
             <input
             type="email"
             placeholder="E-mail"
             onChange={(event)=>{setMail(event.target.value)}}
             value={mail}
             className="mail"
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

export default Register;