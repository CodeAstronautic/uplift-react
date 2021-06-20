import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLogo">
        <h2>React Routing</h2>
      </div>
      <div className="navbar__nav">
        <NavLink exact activeClassName="active_class" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/tab">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
