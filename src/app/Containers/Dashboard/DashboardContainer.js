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
import { Row, Col, Grid } from "react-flexbox-grid";
import DashboardTable from "../../components/Table/DashboardTable";

class DashboardContainer extends Component {
  componentWillMount() {
    // this.props.fetchData();
  }

  componentDidMount() {
    // setInterval(this.props.fetchData.bind(this), 100000); // 300000 = 5 minutes
  }
  render() {
    return (
      <div id="body">
        <div id="left" className="column">
          <div className="top-left">
            <h4>JL Designs</h4>
          </div>
          <div className="bottom">
            <SideNavigation />
          </div>
        </div>
        <div id="right" className="column">
          <div className="top-right">Top Right Header</div>
          <div className="bottom">
            <Grid fluid>
              <div>
                <span>
                  <a href="dashboard">Home</a> / Dashboard
                </span>
              </div>
              <Row>
                <Col xs={12} sm={6} md={6} lg={3} className="blue_bg grid">
                  <div>
                    <GraphHeader font={1.5} color="white" title="3,194" />
                    <GraphHeader font={1} color="white" title="New Users" />
                  </div>
                  <div className="chart-padding">
                    <SimpleLineChart />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={3} className="yellow_bg grid">
                  <div>
                    <GraphHeader font={1.5} color="white" title="350" />
                    <GraphHeader
                      font={1}
                      color="white"
                      title="Registered Users"
                    />
                  </div>
                  <div className="chart-padding">
                    <BarChart height={100} />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={3} className="lightblue_bg grid">
                  <div>
                    <GraphHeader font={1.5} color="white" title="3,250" />
                    <GraphHeader font={1} color="white" title="Page Views" />
                  </div>
                  <div className="chart-padding">
                    <HorizontalBarChart />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={3} className="red_bg grid">
                  <div>
                    <GraphHeader font={1.5} color="white" title="2,194" />
                    <GraphHeader font={1} color="white" title="Current Users" />
                  </div>
                  <div className="chart-padding">
                    <BarChart height={100} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} className="white_bg grid">
                  <div className="left-align">
                    <GraphHeader font={1.5} title="Traffic" />
                    <GraphHeader font={1} title="January - June" />
                  </div>
                  <div>
                    <LineChart />
                  </div>
                </Col>
              </Row>
              <Row className="between-lg grid progress">
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
                    subheader="78,706 Views(60%)"
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
              <Row className="grid">
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
                          <GraphHeader
                            font={1.5}
                            title="45K"
                            alignment="center"
                          />
                        </Col>
                        <Col className="center-lg" xs={6} sm={6} md={6} lg={6}>
                          <GraphHeader
                            font={1.5}
                            title="61K"
                            alignment="center"
                          />
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
                          <GraphHeader
                            font={1.5}
                            title="21K"
                            alignment="center"
                          />
                        </Col>
                        <Col className="center-lg" xs={6} sm={6} md={6} lg={6}>
                          <GraphHeader
                            font={1.5}
                            title="41K"
                            alignment="center"
                          />
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
                          <GraphHeader
                            font={1.5}
                            title="32K"
                            alignment="center"
                          />
                        </Col>
                        <Col className="center-lg" xs={6} sm={6} md={6} lg={6}>
                          <GraphHeader
                            font={1.5}
                            title="12K"
                            alignment="center"
                          />
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
                          <GraphHeader
                            font={1.5}
                            title="-1K"
                            alignment="center"
                          />
                        </Col>
                        <Col className="center-lg" xs={6} sm={6} md={6} lg={6}>
                          <GraphHeader
                            font={1.5}
                            title="-2K"
                            alignment="center"
                          />
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="grid">
                <div className="grey_bg">
                  <DashboardTable />
                </div>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

// connect react with redux
// @params mapStateToProps (necessity)
// @params mapDispatchToProps (optional)
function mapStateToProps(state) {
  return { astronomy: state.astronomy };
}

export default connect(mapStateToProps, { fetchData })(DashboardContainer);
