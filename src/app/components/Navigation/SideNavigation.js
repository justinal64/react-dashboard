import React, { Component } from "react";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";

import Collapsible from "react-collapsible";
import Segment from "../Typography/Segment/Segment";
import { Navigation } from "./Styles";
import { getIcon } from "../Helper/Icon";

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
          <a href="/dashboard">Dashboard</a>
        </li>
        <Segment title="UI Elements" font={0.75} />
        {getIcon("puzzle-piece")}
        <Collapsible trigger="Components">
          <FontAwesome
            name="puzzle-piece"
            style={navColorScheme}
            rotate={270}
            inverse={true}
          />
          <li>
            <a href="/buttons">Buttons</a>
          </li>
          {getIcon("puzzle-piece")}
          <li>
            <a href="/socialbuttons">Social Buttons</a>
          </li>
          {getIcon("puzzle-piece")}
          <li>
            <a href="/Cards">Cards</a>
          </li>
          {getIcon("puzzle-piece")}
          <li>
            <a href="/modals">Modals</a>
          </li>
          {getIcon("puzzle-piece")}
          <li>
            <a href="/switches">Switches</a>
          </li>
          {getIcon("puzzle-piece")}
          <li>
            <a href="/tables">Tables</a>
          </li>
          {getIcon("puzzle-piece")}
          <li>
            <a href="/tabs">Tabs</a>
          </li>
        </Collapsible>
        {getIcon("check-square-o")}
        <Collapsible trigger="Forms">
          <li>
            <a href="/basicforms">Basic Forms</a>
          </li>
          <li>
            <a href="/advancedforms">Advanced Forms</a>
          </li>
          <li>
            <a href="/texteditors">Text Editors</a>
          </li>
        </Collapsible>
        <FontAwesome name="bolt" style={navColorScheme} inverse={true} />
        <Collapsible trigger="Plugins">
          <li>
            <a href="/loadingbuttons">Loading Buttons</a>
          </li>
          <li>
            <a href="/spinners">Spinners</a>
          </li>
        </Collapsible>
        <FontAwesome name="star" style={navColorScheme} inverse={true} />
        <Collapsible trigger="Icons">
          <li>
            <a href="/fontawesome">Font Awesome</a>
          </li>
          <li>
            <a href="/simplelineicons">Simple Line Icons</a>
          </li>
        </Collapsible>
        <FontAwesome name="pie-chart" style={navColorScheme} inverse={true} />
        <Collapsible trigger="Charts">
          <li>
            <a href="/barchart">Bar Chart</a>
          </li>
          <li>
            <a href="/basicchart">Basic Chart</a>
          </li>
          <li>
            <a href="/horizontalchart">Horizontal Chart</a>
          </li>
          <li>
            <a href="/linechart">Line Chart</a>
          </li>
          <li>
            <a href="/piechart">Pie Chart</a>
          </li>
          <li>
            <a href="/simplelinechart">Simple Line Chart</a>
          </li>
          <li>
            <a href="/socialmediachart">Social Media Chart</a>
          </li>
        </Collapsible>
        <Segment title="Extras" font={0.75} />
        <FontAwesome name="star" style={navColorScheme} inverse={true} />
        <Collapsible trigger="Pages">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/basicchart">Basic Chart</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/error404">Error 404</a>
          </li>
          <li>
            <a href="/error500">Error 500</a>
          </li>
        </Collapsible>
        <FontAwesome
          name="window-close"
          style={navColorScheme}
          rotate={270}
          inverse={true}
        />
        <Collapsible trigger="UI Kits">
          <li>
            <a href="/invoicing">Invoicing</a>
          </li>
          <li>
            <a href="/email">Email</a>
          </li>
        </Collapsible>
        <li>
          <a href="/widgets">Widgets</a>
        </li>
      </Navigation>
    );
  }
}

let navColorScheme = {
  color: "#9faecb",
  float: "left",
  marginLeft: ".25em",
  width: "20px",
  height: "20px"
};

// connect react with redux
// @params mapStateToProps (necessity)
// @params mapDispatchToProps (optional)
// function mapStateToProps(state) {}

export default SideNavigation;
