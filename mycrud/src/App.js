import './App.css';

//import Check from './check';
//import ShowAllUser from "./ShowAllUser"

import { Switch, Route } from 'react-router-dom'
import Home from "./HomePage"
import CreateNewAccount from './CreateNewAccount';
import Update from './Update';
import Login from "./Login"
// Routing of the application
// TODO protect home page if no login, 2 default path "/"
function App() {
  return (
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Create" component={CreateNewAccount} />
      <Route path="/Update" component={Update} />
    </Switch>)
}

export default App;
