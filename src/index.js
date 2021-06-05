import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "views/Home.js";
import Project from "views/Project.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
        path="/" 
        exact 
        render={props => <Home {...props} />} 
      />
      <Route 
        path="/home" 
        exact 
        render={props => <Home {...props} />} 
      />
      <Route
        path="/project"
        exact
        render={props => <Project {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);