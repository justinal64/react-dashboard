import React, { Component } from "react";

import Collapsible from "react-collapsible";
import Segment from "../Typography/Segment/Segment";
import { Navigation, Li } from "./Styles";
import { getIcon } from "../Helper/Helper";

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
          {getIcon("puzzle-piece", navColorScheme)}
          <a href="/dashboard">Dashboard</a>
        </li>
        <Segment title="UI Elements" font={0.75} />
        {getIcon("puzzle-piece", navColorScheme)}
        <Collapsible trigger="Components">
          <Li>
            {getIcon("puzzle-piece", navColorScheme)}
            <a href="/buttons" className="test">
              Buttons
            </a>
          </Li>
          <Li>
            {getIcon("puzzle-piece", navColorScheme)}
            <a href="/socialbuttons">Social Buttons</a>
          </Li>
          <Li>
            {getIcon("puzzle-piece", navColorScheme)}
            <a href="/Cards">Cards</a>
          </Li>
          <Li>
            {getIcon("puzzle-piece", navColorScheme)}
            <a href="/modals">Modals</a>
          </Li>
          <Li>
            {getIcon("puzzle-piece", navColorScheme)}
            <a href="/switches">Switches</a>
          </Li>
          <Li>
            {getIcon("puzzle-piece", navColorScheme)}
            <a href="/tables">Tables</a>
          </Li>
          <Li>
            {getIcon("puzzle-piece", navColorScheme)}
            <a href="/tabs">Tabs</a>
          </Li>
        </Collapsible>
        {getIcon("check-square-o", navColorScheme)}
        <Collapsible trigger="Forms">
          <Li>
            {getIcon("check-square-o", navColorScheme)}
            <a href="/basicforms">Basic Forms</a>
          </Li>
          <Li>
            {getIcon("check-square-o", navColorScheme)}
            <a href="/advancedforms">Advanced Forms</a>
          </Li>
          <Li>
            {getIcon("check-square-o", navColorScheme)}
            <a href="/texteditors">Text Editors</a>
          </Li>
        </Collapsible>
        {getIcon("bolt", navColorScheme)}
        <Collapsible trigger="Plugins">
          <Li>
            {getIcon("bolt", navColorScheme)}
            <a href="/loadingbuttons">Loading Buttons</a>
          </Li>
          <Li>
            {getIcon("bolt", navColorScheme)}
            <a href="/spinners">Spinners</a>
          </Li>
        </Collapsible>
        {getIcon("star", navColorScheme)}
        <Collapsible trigger="Icons">
          <Li>
            {getIcon("star", navColorScheme)}
            <a href="/fontawesome">Font Awesome</a>
          </Li>
          <Li>
            {getIcon("star", navColorScheme)}
            <a href="/simplelineicons">Simple Line Icons</a>
          </Li>
        </Collapsible>
        {getIcon("pie-chart", navColorScheme)}
        <Collapsible trigger="Charts">
          <Li>
            {getIcon("pie-chart", navColorScheme)}
            <a href="/barchart">Bar Chart</a>
          </Li>
          <Li>
            {getIcon("pie-chart", navColorScheme)}
            <a href="/basicchart">Basic Chart</a>
          </Li>
          <Li>
            {getIcon("pie-chart", navColorScheme)}
            <a href="/horizontalchart">Horizontal Chart</a>
          </Li>
          <Li>
            {getIcon("pie-chart", navColorScheme)}
            <a href="/linechart">Line Chart</a>
          </Li>
          <Li>
            {getIcon("pie-chart", navColorScheme)}
            <a href="/piechart">Pie Chart</a>
          </Li>
          <Li>
            {getIcon("pie-chart", navColorScheme)}
            <a href="/simplelinechart">Simple Line Chart</a>
          </Li>
          <Li>
            {getIcon("pie-chart", navColorScheme)}
            <a href="/socialmediachart">Social Media Chart</a>
          </Li>
        </Collapsible>
        <Segment title="Extras" font={0.75} />
        {getIcon("star", navColorScheme)}
        <Collapsible trigger="Pages">
          <Li>
            {getIcon("star", navColorScheme)}
            <a href="/login">Login</a>
          </Li>
          <Li>
            {getIcon("star", navColorScheme)}
            <a href="/basicchart">Basic Chart</a>
          </Li>
          <Li>
            {getIcon("star", navColorScheme)}
            <a href="/register">Register</a>
          </Li>
          <Li>
            {getIcon("star", navColorScheme)}
            <a href="/error404">Error 404</a>
          </Li>
          <Li>
            {getIcon("star", navColorScheme)}
            <a href="/error500">Error 500</a>
          </Li>
        </Collapsible>
        {getIcon("window-close", navColorScheme)}
        <Collapsible trigger="UI Kits">
          <Li>
            {getIcon("window-close", navColorScheme)}
            <a href="/invoicing">Invoicing</a>
          </Li>
          <Li>
            {getIcon("window-close", navColorScheme)}
            <a href="/email">Email</a>
          </Li>
        </Collapsible>
        <li>
          {getIcon("calculator", navColorScheme)}
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
