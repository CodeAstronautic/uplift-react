import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Components/Register";
import Home from "./Components/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
