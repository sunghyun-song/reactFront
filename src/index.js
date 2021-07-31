import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PortFolio from "views/PortFolio.js";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <PortFolio {...props} />} />
      {/* <Route 
        path="/home" 
        exact 
        render={props => <PortFolio {...props} />} 
      />
      <Route
        path="/project"
        exact
        render={props => <Project {...props} />}
      /> */}
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
