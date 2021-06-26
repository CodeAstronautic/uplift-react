
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Home from "./Components/Home";

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
