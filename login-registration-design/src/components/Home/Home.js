import React from "react";
import "./Home.css";
import Router from "../Navbar/Router.svg";

const Home = () => {
  return (
    <div>
      <div className="container">
        <h1>React Routing</h1>
        <img src={Router} alt="" />
      </div>
    </div>
  );
};

export default Home;
