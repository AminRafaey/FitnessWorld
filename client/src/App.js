import React, { useState, useEffect } from "react";

import NavBar from "./navbar";
import { Start, Program, Coach, Footer } from "./home.js";
import { Switch, Route } from "react-router-dom";
import { Login } from "./login";
import { Contact } from "./contactUs.js";
import { Review } from "./review";
import { Admin } from "./admin";
function App() {
  return (
    <div className="fluid-container">
      {
        <Switch>
          <Route path="/home">
            <NavBar />
            <Start />
            <Program />
            <Coach />
            <Footer />
          </Route>
          <Route path="/review">
            <NavBar />
            <Review />
          </Route>
          <Route path="/contact">
            <NavBar />
            <Contact />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <NavBar />
            <Start />
            <Program />
            <Coach />
            <Footer />
          </Route>
        </Switch>
      }
    </div>
  );
}

export default App;
