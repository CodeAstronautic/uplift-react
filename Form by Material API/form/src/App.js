import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./Form";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/form" exact={true} component={Form} />
        </Switch>
      </Router>
    </div>
     
  );
}

export default App;
