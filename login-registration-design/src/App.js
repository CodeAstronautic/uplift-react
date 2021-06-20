import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import Tab from "./components/TabContainer/Tab";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app_content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tab" component={Tab} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
