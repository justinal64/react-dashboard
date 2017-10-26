import React, { Component } from "react";
import SideNavigation from "../../components/Navigation/SideNavigation";
import BarChart from "../../components/ChartJS/BarChart";

import { Row, Col, Grid } from "react-flexbox-grid";

import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";

class BarChartContainer extends Component {
  componentWillMount() {
    // this.props.fetchData();
  }

  componentDidMount() {
    // setInterval(this.props.fetchData.bind(this), 100000); // 300000 = 5 minutes
  }
  render() {
    return (
      <div className="grid2x2">
        <div className="sidebar box">
          <SideNavigation />
        </div>
        <div className="chart-content box">
          <Row className="center-lg center-md center-sm center-xs">
            <Col xs={12} sm={10} md={10} lg={10}>
              <h2>Bar Chart</h2>
            </Col>
          </Row>
          <Row className="around-lg around-md around-sm">
            <Col xs={12} sm={10} md={10} lg={10}>
              <BarChart />
            </Col>
          </Row>
          <Row className="around-lg around-md around-sm">
            <Col xs={12} sm={10} md={10} lg={10}>
              Properties Available Are
            </Col>
          </Row>
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

export default connect(mapStateToProps, { fetchData })(BarChartContainer);
