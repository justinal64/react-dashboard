import React, { Component } from "react";
import "./Styles.scss";
import SideNavigation from "../../components/Navigation/SideNavigation";
import LineChart from "../../components/ChartJS/LineChart";
import BarChart from "../../components/ChartJS/BarChart";

import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";
import SideNavigationTest from "../../components/Navigation/SideNavigationTest";

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
      <div id="body">
        <div id="left" className="column">
          <div className="top-left">
            <h4>JL Designs</h4>
          </div>
          <div className="bottom">
            <SideNavigationTest />
          </div>
        </div>
        <div id="right" className="column">
          <div className="top-right">Top Right Header</div>
          <div className="bottom">
            <Grid>
              <Row className="center-lg center-md center-sm center-xs bottom-lg bottom-md">
                <Col xs={12} sm={12} md={5} lg={5}>
                  <Col xs={12} sm={12} md={5} lg={5} className="top-lg">
                    <div className="border">
                      <span>Line Chart</span>
                    </div>
                  </Col>
                  <LineChart height={300} />
                </Col>
                <Col xs={12} sm={12} md={5} lg={5}>
                  <Col xs={12} sm={12} md={5} lg={5} className="top-lg">
                    <h2>Bar Chart</h2>
                  </Col>
                  <BarChart height={300} xAxes={true} yAxes={true} />
                </Col>
              </Row>
              <Row className="center-lg center-md center-sm center-xs bottom-lg bottom-md">
                <Col xs={12} sm={12} md={5} lg={5}>
                  <Col xs={12} sm={12} md={5} lg={5} className="top-lg">
                    <div className="border">
                      <span>Line Chart</span>
                    </div>
                  </Col>
                  <LineChart height={300} />
                </Col>
                <Col xs={12} sm={12} md={5} lg={5}>
                  <Col xs={12} sm={12} md={5} lg={5} className="top-lg">
                    <h2>Bar Chart</h2>
                  </Col>
                  <BarChart height={300} xAxes={true} yAxes={true} />
                </Col>
              </Row>
              <Row className="center-lg center-md center-sm center-xs bottom-lg bottom-md">
                <Col xs={12} sm={12} md={5} lg={5}>
                  <Col xs={12} sm={12} md={5} lg={5} className="top-lg">
                    <div className="border">
                      <span>Line Chart</span>
                    </div>
                  </Col>
                  <LineChart height={300} />
                </Col>
                <Col xs={12} sm={12} md={5} lg={5}>
                  <Col xs={12} sm={12} md={5} lg={5} className="top-lg">
                    <h2>Bar Chart</h2>
                  </Col>
                  <BarChart height={300} xAxes={true} yAxes={true} />
                </Col>
              </Row>
              <Row className="center-lg center-md center-sm center-xs bottom-lg bottom-md">
                <Col xs={12} sm={12} md={5} lg={5}>
                  <Col xs={12} sm={12} md={5} lg={5} className="top-lg">
                    <div className="border">
                      <span>Line Chart</span>
                    </div>
                  </Col>
                  <LineChart height={300} />
                </Col>
                <Col xs={12} sm={12} md={5} lg={5}>
                  <Col xs={12} sm={12} md={5} lg={5} className="top-lg">
                    <h2>Bar Chart</h2>
                  </Col>
                  <BarChart height={300} xAxes={true} yAxes={true} />
                </Col>
              </Row>
              <Row className="center-lg center-md center-sm center-xs bottom-lg bottom-md">
                <Col xs={12} sm={12} md={5} lg={5}>
                  <Col xs={12} sm={12} md={5} lg={5} className="top-lg">
                    <div className="border">
                      <span>Line Chart</span>
                    </div>
                  </Col>
                  <LineChart height={300} />
                </Col>
                <Col xs={12} sm={12} md={5} lg={5}>
                  <Col xs={12} sm={12} md={5} lg={5} className="top-lg">
                    <h2>Bar Chart</h2>
                  </Col>
                  <BarChart height={300} xAxes={true} yAxes={true} />
                </Col>
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

export default connect(mapStateToProps, { fetchData })(TestContainer);
