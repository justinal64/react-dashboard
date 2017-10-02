import React, { Component } from "react";
import "./Styles.scss";
import SideNavigation from "../Navigation/SideNavigation";
import GraphHeader from "../Typography/GraphHeader/GraphHeader";

import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";
import BarChart from "../ChartJS/BarChart";
import SimpleLineChart from "../ChartJS/SimpleLineChart";
import LineChart from "../ChartJS/LineChart";
import HorizontalBarChart from "../ChartJS/HorizontalBarChart";
import PieChart from "../ChartJS/PieChart";
// import BasicChart from "../ChartJS/BasicChart";
import Split from "grommet/components/Split";
import { Row, Col, Grid } from "react-flexbox-grid";

const dataVO = [
  { x: 1, y: 21 },
  { x: 2, y: 2 },
  { x: 3, y: 16 },
  { x: 4, y: 18 },
  { x: 5, y: 0 }
];
const dataPV = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 6 }
];
const dataNU = [
  { x: 1, y: 2 },
  { x: 2, y: 45 },
  { x: 3, y: 12 },
  { x: 4, y: 2 },
  { x: 5, y: 32 }
];
class TestContainer extends Component {
  componentWillMount() {
    // this.props.fetchData();
  }

  componentDidMount() {
    // setInterval(this.props.fetchData.bind(this), 100000); // 300000 = 5 minutes
  }
  render() {
    return (
      <Split flex="right">
        <SideNavigation />
        <div>
          <div className="title-spacing">
            <span className="title">Dashboard</span>
          </div>
          <Grid fluid className="lightgrey_bg">
            <Row>
              <Col xs={12} sm={6} md={6} lg={3} className="blue_bg grid">
                <div className="left-align">
                  <span className="header">3,194</span>
                  <span className="subheader">New Users</span>
                </div>
                <div className="chart-padding">
                  <SimpleLineChart />
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3} className="yellow_bg grid">
                <div className="left-align">
                  <span className="header">350</span>
                  <span className="subheader">Registered Users</span>
                </div>
                <div className="chart-padding">
                  <BarChart />
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3} className="lightblue_bg grid">
                <div className="left-align">
                  <span className="header">3,250</span>
                  <span className="subheader">Page Views</span>
                </div>
                <div className="chart-padding">
                  <HorizontalBarChart />
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3} className="red_bg grid">
                <div className="left-align">
                  <span className="header">2,194</span>
                  <span className="subheader">New Users</span>
                </div>
                <div className="chart-padding">
                  <BarChart />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} className="white_bg grid">
                <div className="left-align">
                  <span className="lb_header">Traffic</span>
                  <span className="lb_subheader">November 2017</span>
                </div>
                LineChart
                <div>
                  <LineChart />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={6} lg={3} className="blue_bg grid">
                <div className="left-align">
                  <span className="header">3,194</span>
                  <span className="subheader">New Users</span>
                </div>
                <div className="chart-padding">
                  <SimpleLineChart />
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3} className="yellow_bg grid">
                <div className="left-align">
                  <span className="header">350</span>
                  <span className="subheader">Registered Users</span>
                </div>
                <div className="chart-padding">
                  <BarChart />
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3} className="lightblue_bg grid">
                <div className="left-align">
                  <span className="header">3,250</span>
                  <span className="subheader">Page Views</span>
                </div>
                <div className="chart-padding">
                  <HorizontalBarChart />
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3} className="red_bg grid">
                <div className="left-align">
                  <span className="header">2,194</span>
                  <span className="subheader">New Users</span>
                </div>
                <div className="chart-padding">
                  <BarChart />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </Split>
    );
  }
}

// connect react with redux
// @params mapStateToProps (necessity)
// @params mapDispatchToProps (optional)
function mapStateToProps(state) {
  return { astronomy: state.astronomy };
}

export default connect(mapStateToProps, { fetchData })(TestContainer);
