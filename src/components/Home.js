import React from "react";
import Nav from "./Navbar";
import "./home.css";

const Home =()=>{
    return(
        <div >
     <Nav/>
     <h1>Welcome to my Login Portal</h1>
     <span className="boo">
        {console.log("hii")}
       <a href="/login"><p>Login</p></a>
       <a href="/register"><p>Register</p></a>
     </span>
    </div>
    
    );
};

export default Home;