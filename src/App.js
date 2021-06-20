// import React from "react";
// import {add,sub, mul, div}  from './Calc'
//
//
// function App(){
//   return(
//     <>
//     <ul>
//       <li>The sum of two numbers is {add(40,4)}</li>
//       <li>The diff of two numbers is {sub(40,4)}</li>
//       <li>The multiplication of two numbers is {mul(40,4)}</li>
//       <li>The division of two numbers is {div(40,4)}</li>
//     </ul>
//     </>
//   )
// }
// export default App;
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterForm from "./Components/RegisterForm";
import HomeScreen from "./Components/HomeScreen";

const App = () => {
return (
  <div>
    <Router>
      <Switch>
        <Route path="/" exact={true} component={HomeScreen} />
        <Route path="/register" component={Form} />
      </Switch>
    </Router>
  </div>
);
};

export default App;
