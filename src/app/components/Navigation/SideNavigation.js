import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

import Collapsible from "react-collapsible";
import Segment from "../Typography/Segment/Segment";
import { Navigation, Li } from "./Styles";

const getIcon = font => {
  return <FontAwesome name={font} style={navColorScheme} inverse={true} />;
};

class SideNavigation extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  componentWillMount() {
    // this.props.randomData();
  }

  redirect(login) {
    // "login" contains the users email/password
    console.log({ login });
    // logic to test if the user entered value info for email/password
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <Navigation>
        <Segment title="Dashboard" font={0.75} />
        <li>
          {getIcon("puzzle-piece")}
          <a href="/dashboard">Dashboard</a>
        </li>
        <Segment title="UI Elements" font={0.75} />
        {getIcon("puzzle-piece")}
        <Collapsible trigger="Components">
          <Li>
            {getIcon("puzzle-piece")}
            <a href="/buttons" className="test">
              Buttons
            </a>
          </Li>
          <Li>
            {getIcon("puzzle-piece")}
            <a href="/socialbuttons">Social Buttons</a>
          </Li>
          <Li>
            {getIcon("puzzle-piece")}
            <a href="/Cards">Cards</a>
          </Li>
          <Li>
            {getIcon("puzzle-piece")}
            <a href="/modals">Modals</a>
          </Li>
          <Li>
            {getIcon("puzzle-piece")}
            <a href="/switches">Switches</a>
          </Li>
          <Li>
            {getIcon("puzzle-piece")}
            <a href="/tables">Tables</a>
          </Li>
          <Li>
            {getIcon("puzzle-piece")}
            <a href="/tabs">Tabs</a>
          </Li>
        </Collapsible>
        {getIcon("check-square-o")}
        <Collapsible trigger="Forms">
          <Li>
            {getIcon("check-square-o")}
            <a href="/basicforms">Basic Forms</a>
          </Li>
          <Li>
            {getIcon("check-square-o")}
            <a href="/advancedforms">Advanced Forms</a>
          </Li>
          <Li>
            {getIcon("check-square-o")}
            <a href="/texteditors">Text Editors</a>
          </Li>
        </Collapsible>
        {getIcon("bolt")}
        <Collapsible trigger="Plugins">
          <Li>
            {getIcon("bolt")}
            <a href="/loadingbuttons">Loading Buttons</a>
          </Li>
          <Li>
            {getIcon("bolt")}
            <a href="/spinners">Spinners</a>
          </Li>
        </Collapsible>
        {getIcon("star")}
        <Collapsible trigger="Icons">
          <Li>
            {getIcon("star")}
            <a href="/fontawesome">Font Awesome</a>
          </Li>
          <Li>
            {getIcon("star")}
            <a href="/simplelineicons">Simple Line Icons</a>
          </Li>
        </Collapsible>
        {getIcon("pie-chart")}
        <Collapsible trigger="Charts">
          <Li>
            {getIcon("pie-chart")}
            <a href="/barchart">Bar Chart</a>
          </Li>
          <Li>
            {getIcon("pie-chart")}
            <a href="/basicchart">Basic Chart</a>
          </Li>
          <Li>
            {getIcon("pie-chart")}
            <a href="/horizontalchart">Horizontal Chart</a>
          </Li>
          <Li>
            {getIcon("pie-chart")}
            <a href="/linechart">Line Chart</a>
          </Li>
          <Li>
            {getIcon("pie-chart")}
            <a href="/piechart">Pie Chart</a>
          </Li>
          <Li>
            {getIcon("pie-chart")}
            <a href="/simplelinechart">Simple Line Chart</a>
          </Li>
          <Li>
            {getIcon("pie-chart")}
            <a href="/socialmediachart">Social Media Chart</a>
          </Li>
        </Collapsible>
        <Segment title="Extras" font={0.75} />
        {getIcon("star")}
        <Collapsible trigger="Pages">
          <Li>
            {getIcon("star")}
            <a href="/login">Login</a>
          </Li>
          <Li>
            {getIcon("star")}
            <a href="/basicchart">Basic Chart</a>
          </Li>
          <Li>
            {getIcon("star")}
            <a href="/register">Register</a>
          </Li>
          <Li>
            {getIcon("star")}
            <a href="/error404">Error 404</a>
          </Li>
          <Li>
            {getIcon("star")}
            <a href="/error500">Error 500</a>
          </Li>
        </Collapsible>
        {getIcon("window-close")}
        <Collapsible trigger="UI Kits">
          <Li>
            {getIcon("window-close")}
            <a href="/invoicing">Invoicing</a>
          </Li>
          <Li>
            {getIcon("window-close")}
            <a href="/email">Email</a>
          </Li>
        </Collapsible>
        <li>
          {getIcon("calculator")}
          <a href="/widgets">Widgets</a>
        </li>
      </Navigation>
    );
  }
}

let navColorScheme = {
  color: "#9faecb",
  marginLeft: ".50em",
  width: "20px",
  height: "20px",
  paddingRight: ".5em"
};

export default SideNavigation;
