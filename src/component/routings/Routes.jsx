import React from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Register2 } from "../auth/Register2";
import Register3 from "../auth/Register3";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/register" component={Register3}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </div>
  );
};
