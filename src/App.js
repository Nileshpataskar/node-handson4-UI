import React, {  } from "react";
import "./App.css";
import Signin from "./Signin";
import Signup from "./Signup";
import { Link, Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <div>
      <div className="main">
        <div className="dad">
          <h2>Handson 4  </h2>
          <div className="Navbar">
            <Link to={'/signin'} className="link">
            <div className="sigin button" >
              Sign In
            </div>
            </Link>
            <Link to={'signup' }className="link">
            <div className="signup button" >
              Sign Up
            </div>
            </Link>
          </div>
        </div>

<Routes>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/signin" element={<Signin/>}/>

</Routes>

      </div>
    </div>
  );
};

export default App;

