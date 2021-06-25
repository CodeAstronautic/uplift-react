
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Nav from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    
    <div>
      <Router>
         <Switch>
           <Route path="/" exact={true} component={Home} />
           <Route path="/login" exact={true} component={Login} />
           <Route path="/register" exact={true} component={Register} />
         </Switch>
       </Router>
    </div>
  );
}

export default App;
