import React, { Component } from "react";
import AstronomyContainer from "./components/AstronomyContainer.js";
import UserContainer from "./components/UserContainer.js";
import { Switch, Route } from "react-router-dom";
import Login from "../screens/Login.js";
import Dashboard from "../screens/Dashboard.js";
import NotFound from "../screens/NotFound.js";
import Forms from "../screens/Forms.js";
import Test from "../screens/Test.js";
import BarChart from "../screens/Charts/BarChart.js";
import BasicChart from "../screens/Charts/BasicChart.js";
import HorizontalBarChart from "../screens/Charts/HorizontalBarChart.js";

import * as V from "victory"; // temp until we know what charts we are using

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/forms" component={Forms} />
        <Route path="/Test" component={Test} />
        <Route path="/barChart" component={BarChart} />
        <Route path="/basicchart" component={BasicChart} />
        <Route path="/horizontalbarchart" component={HorizontalBarChart} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
};

export default App;
