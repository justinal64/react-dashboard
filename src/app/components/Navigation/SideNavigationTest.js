import React, { Component } from "react";
import { connect } from "react-redux";
// import randomData from "../../../actions/random_data";
import "./SideNavigationTest.scss";
import { Row, Col, Grid } from "react-flexbox-grid";
import Collapsible from "react-collapsible";
import FontAwesome from "react-fontawesome";

class SideNavigationTest extends Component {
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
      <div>
        <ul className="nav">
          <span className="fa-stack">
            {/* <FontAwesome name="square-o" stack="2x" /> */}
            <FontAwesome name="twitter" stack="1x" />
          </span>
          <Collapsible trigger="Charts">
            <li>
              <a href="/chart">Chart</a>
            </li>
            <li>
              <a href="/barchart">Bar Chart</a>
            </li>
            <li>
              <a href="/basicchart">Basic Chart</a>
            </li>
            <li>
              <a href="/horizontalbarchart">Horizontal Bar Chart</a>
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
          <h3>None Collapsing</h3>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Bio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}

// connect react with redux
// @params mapStateToProps (necessity)
// @params mapDispatchToProps (optional)
// function mapStateToProps(state) {}

export default SideNavigationTest;
