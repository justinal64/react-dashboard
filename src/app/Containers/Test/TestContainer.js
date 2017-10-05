import React, { Component } from "react";
import "./Styles.scss";
import SideNavigation from "../../components/Navigation/SideNavigation";
import GraphHeader from "../../components/Typography/GraphHeader/GraphHeader";

import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";
import BarChart from "../../components/ChartJS/BarChart";
import SimpleLineChart from "../../components/ChartJS/SimpleLineChart";
import LineChart from "../../components/ChartJS/LineChart";
import HorizontalBarChart from "../../components/ChartJS/HorizontalBarChart";
import PieChart from "../../components/ChartJS/PieChart";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SocialMediaChart from "../../components/ChartJS/SocialMediaChart";
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
            <span className="title">Testing Area</span>
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
                <ProgressBar
                  header="Visits"
                  subheader="24,000 Users (40%)"
                  value={40}
                  backgroundColor="Green"
                />
              </Col>
              <Col xs={12} sm={6} md={6} lg={2}>
                <ProgressBar
                  header="Unique"
                  subheader="24,093 Users (20%)"
                  value={20}
                  backgroundColor="lightblue"
                />
              </Col>
              <Col xs={12} sm={6} md={6} lg={2}>
                <ProgressBar
                  header="Page Views"
                  subheader="78,706 Views (60%)"
                  value={60}
                  backgroundColor="yellow"
                />
              </Col>
              <Col xs={12} sm={6} md={6} lg={2}>
                <ProgressBar
                  header="New Users"
                  subheader="22,123 Users (80%)"
                  value={80}
                  backgroundColor="red"
                />
              </Col>
              <Col xs={12} sm={6} md={6} lg={2}>
                <ProgressBar
                  header="Bounce Rate"
                  subheader="Average 40.5%"
                  value={40}
                  backgroundColor="blue"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={6} lg={3}>
                <div className="white_bg">
                  <div className="facebook_bg">
                    <SocialMediaChart />
                  </div>
                  <div>
                    <Row>
                      <Col
                        className="center-lg divider"
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                      >
                        <span className="sm_header">45K</span>
                      </Col>
                      <Col className="center-lg" xs={6} sm={6} md={6} lg={6}>
                        <span className="sm_subheader">61K</span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3}>
                <div className="white_bg">
                  <div className="twitter_bg">
                    <SocialMediaChart />
                  </div>
                  <div>
                    <Row>
                      <Col
                        className="center-lg divider"
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                      >
                        <span className="sm_header">21K</span>
                      </Col>
                      <Col className="center-lg" xs={6} sm={6} md={6} lg={6}>
                        <span className="sm_subheader">16K</span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3}>
                <div className="white_bg">
                  <div className="linkedin_bg">
                    <SocialMediaChart />
                  </div>
                  <div>
                    <Row>
                      <Col
                        className="center-lg divider"
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                      >
                        <span className="sm_header">32K</span>
                      </Col>
                      <Col className="center-lg" xs={6} sm={6} md={6} lg={6}>
                        <span className="sm_subheader">12K</span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3}>
                <div className="white_bg">
                  <div className="googleplus_bg">
                    <SocialMediaChart />
                  </div>
                  <div>
                    <Row>
                      <Col
                        className="center-lg divider"
                        xs={6}
                        sm={6}
                        md={6}
                        lg={6}
                      >
                        <span className="sm_header">-1K</span>
                      </Col>
                      <Col className="center-lg" xs={6} sm={6} md={6} lg={6}>
                        <span className="sm_subheader">-2K</span>
                      </Col>
                    </Row>
                  </div>
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