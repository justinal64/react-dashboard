import React, { Component } from "react";
import UserContainer from "./components/UserContainer.js";
import { Switch, Route } from "react-router-dom";
import Login from "../screens/Login.js";
import Charts from "../screens/Charts/Charts.js";
import Dashboard from "../screens/Dashboard.js";
import NotFound from "../screens/NotFound.js";
// import Forms from "../screens/Forms.js";
import Test from "../screens/Test.js";
import BarChart from "../screens/Charts/BarChart.js";
import BasicChart from "../screens/Charts/BasicChart.js";
import HorizontalBarChart from "../screens/Charts/HorizontalBarChart.js";
import PieChart from "../screens/Charts/PieChart.js";
import LineChart from "../screens/Charts/LineChart.js";
import SimpleLineChart from "../screens/Charts/SimpleLineChart.js";
import SocialMediaChart from "../screens/Charts/SocialMediaChart.js";

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/forms" component={Forms} /> */}
        <Route path="/test" component={Test} />
        <Route path="/barchart" component={BarChart} />
        <Route path="/charts" component={Charts} />

        <Route path="/basicchart" component={BasicChart} />
        <Route path="/horizontalbarchart" component={HorizontalBarChart} />
        <Route path="/piechart" component={PieChart} />
        <Route path="/linechart" component={LineChart} />
        <Route path="/simplelinechart" component={SimpleLineChart} />
        <Route path="/socialmediachart" component={SocialMediaChart} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
};

export default App;
