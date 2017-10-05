import React, { Component } from "react";
import { connect } from "react-redux";
import randomData from "../../../actions/random_data";
import "./SideNavigationTest.scss";
import { Row, Col, Grid } from "react-flexbox-grid";

class SideNavigationTest extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  componentWillMount() {
    this.props.randomData();
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
function mapStateToProps(state) {
  return { data: state.randomData };
}

export default connect(mapStateToProps, { randomData })(SideNavigationTest);

{
  /* <Box colorIndex="neutral-1" justify="center" align="center" pad="none">
          <Sidebar colorIndex="neutral-1" fixed={true} size="small">
            <Header pad="medium" justify="between">
              <Title>Dashboard</Title>
            </Header>
            <Box flex="grow" justify="start">
              <Menu primary={true}>
                <Anchor href="/dashboard">Dashboard</Anchor>
                <Anchor href="#">Email</Anchor>
                <Anchor href="/forms">Forms</Anchor>
                <Anchor href="/test">Test</Anchor>
              </Menu>
              <Accordion openMulti={true}>
                <AccordionPanel heading="Components">
                  <Anchor href="/dashboard">Dashboard</Anchor>
                  <Anchor href="#">Email</Anchor>
                  <Anchor href="/forms">Forms</Anchor>
                  <Anchor href="/test">Test</Anchor>
                </AccordionPanel>
                <AccordionPanel heading="Forms">
                  <Anchor href="/dashboard">Dashboard</Anchor>
                  <Anchor href="#">Email</Anchor>
                  <Anchor href="/forms">Forms</Anchor>
                  <Anchor href="/test">Test</Anchor>
                </AccordionPanel>
                <AccordionPanel heading="Plugins">
                  <Anchor href="/dashboard">Dashboard</Anchor>
                  <Anchor href="#">Email</Anchor>
                  <Anchor href="/forms">Forms</Anchor>
                  <Anchor href="/test">Test</Anchor>
                </AccordionPanel>
                <AccordionPanel heading="Icons">
                  <Anchor href="/dashboard">Dashboard</Anchor>
                  <Anchor href="#">Email</Anchor>
                  <Anchor href="/forms">Forms</Anchor>
                  <Anchor href="/test">Test</Anchor>
                </AccordionPanel>
                <AccordionPanel heading="Widgets">
                  <Anchor href="/dashboard">Dashboard</Anchor>
                  <Anchor href="#">Email</Anchor>
                  <Anchor href="/forms">Forms</Anchor>
                  <Anchor href="/test">Test</Anchor>
                </AccordionPanel>
                <AccordionPanel heading="Charts">
                  <Anchor href="/barchart">Bar Chart</Anchor>
                  <Anchor href="/basicchart">Basic Chart</Anchor>
                  <Anchor href="/horizontalbarchart">
                    Horizontal Bar Chart
                  </Anchor>
                  <Anchor href="/piechart">Pie Chart</Anchor>
                  <Anchor href="/linechart">Line Chart</Anchor>
                  <Anchor href="/simplelinechart">Simple Line Chart</Anchor>
                  <Anchor href="/socialmediachart">Social Media Chart</Anchor>
                </AccordionPanel>
              </Accordion>
            </Box>
            {/* <Footer pad="medium" /> */
}
{
  /* </Sidebar> */
}
{
  /* </Box> */
}
