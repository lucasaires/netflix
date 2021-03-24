import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import { Home } from "./Components/Home";
import { Login } from "./Components/Login";

export function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/br" component={Home} />
      <Route path="/br/login" component={Login} />
      <Redirect to="/br" />
    </BrowserRouter>
  );
}
