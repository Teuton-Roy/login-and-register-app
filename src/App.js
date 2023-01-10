//import all components//

import './App.css'

import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
//import react-dom//
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/">
            <Homepage />
          </Route>

        </Switch>
      </Router>

      {/* <Homepage />
      <Login />
      <Register /> */}
    </div>
  );
}

export default App;

