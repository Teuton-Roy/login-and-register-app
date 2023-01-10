//import all components//
import React, {useState} from "react";
import './App.css'

import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
//import react-dom//
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';


function App() {
  //  Create a user object if login successfull then go to Homepage//

  const [user, setLoginUser] = useState({})


  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>

          <Route exact path="/register" element={<Register/>} />

          <Route exact path="/" element={
            //conditional rendering//
            user && user._id ? 
            <Homepage/> : 
            <Login setLoginUser={setLoginUser}/>

          }/>

        </Routes>
      </Router>

      {/* <Homepage />
      <Login />
      <Register /> */}
    </div>
  );
}

export default App;



/*
  In react-router-dom v6, "Switch" is repleaced by "Routes".so we need to update the import from
    import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; to ==>
    import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
    
  So, according to v6 update the Router declaration from ==>
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>} />
        <Routeexact  path="/" element={<Homepage/>}/>
      </Routes>
    </Router>
*/