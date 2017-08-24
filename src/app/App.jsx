import React, { Component } from "react";
import AstronomyContainer from "./components/AstronomyContainer.js";
import UserContainer from "./components/UserContainer.js";
import { Switch, Route } from "react-router-dom";
import Login from "../screens/Login.js";
import Dashboard from "../screens/Dashboard.js";
import NotFound from "../screens/NotFound.js";
const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
};

export default App;
