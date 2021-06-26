import React from "react";
import "./navbar.css"


const Nav=()=>{
return(
<div className="container">
    <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
    </ul>
    
    
</div>

);
};

export default Nav;