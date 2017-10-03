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
import ProgressBar from "../ProgressBar/ProgressBar";
import Split from "grommet/components/Split";
import { Row, Col, Grid } from "react-flexbox-grid";

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
                  <span className="lb_subheader">January - June</span>
                </div>
                <div>
                  <LineChart />
                </div>
              </Col>
            </Row>
            <Row className="between-lg grid">
              <Col xs={12} sm={6} md={6} lg={2}>
                <div className="center-align">
                  <span className="lb_header">2,194</span>
                  <span className="lb_subheader">
                    <strong>New Users</strong>
                  </span>
                </div>
                <progress max="100" value="50" />
              </Col>
              <Col xs={12} sm={6} md={6} lg={2}>
                <div className="center-align">
                  <span className="lb_header">2,194</span>
                  <span className="lb_subheader">
                    <strong>New Users</strong>
                  </span>
                </div>
                <progress max="100" value="50" />
              </Col>
              <Col xs={12} sm={6} md={6} lg={2}>
                <div className="center-align">
                  <span className="lb_header">2,194</span>
                  <span className="lb_subheader">
                    <strong>New Users</strong>
                  </span>
                </div>
                <progress max="100" value="50" />
              </Col>
              <Col xs={12} sm={6} md={6} lg={2}>
                <div className="center-align">
                  <span className="lb_header">2,194</span>
                  <span className="lb_subheader">
                    <strong>New Users</strong>
                  </span>
                </div>
                <progress max="100" value="50" />
              </Col>
              <Col xs={12} sm={6} md={6} lg={2}>
                <ProgressBar
                  header="Bounce Rate"
                  subheader="Average 40.5%"
                  value={35}
                />
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
