import React, { Component } from "react";
import SideNavigation from "../../components/Navigation/SideNavigation";
import LineChart from "../../components/ChartJS/LineChart";
import BarChart from "../../components/ChartJS/BarChart";
import PieChart from "../../components/ChartJS/PieChart";
import SimpleLineChart from "../../components/ChartJS/SimpleLineChart";
import HorizontalBarChart from "../../components/ChartJS/HorizontalBarChart";
import BasicChart from "../../components/ChartJS/BasicChart";
import GraphStyling from "../../components/GraphStyling/GraphStyling";
import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";

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
            <SideNavigation />
          </div>
        </div>
        <div id="right" className="column">
          <div className="top-right">Top Right Header</div>
          <div className="bottom">
            <Grid fluid>
              <Row className="around-lg around-md">
                <Col xs={12} sm={12} md={6} lg={6} className="col">
                  <div className="chart_styling">
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <GraphStyling title="Line Chart" />
                    </Col>
                    <div className="simple_chart">
                      <LineChart height={300} aspectratio={false} />
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} className="col">
                  <div className="chart_styling">
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <GraphStyling title="Bar Chart" />
                    </Col>
                    <div className="simple_chart">
                      <BarChart
                        height={300}
                        aspectratio={false}
                        xAxes={true}
                        yAxes={true}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="around-lg around-md">
                <Col xs={12} sm={12} md={6} lg={6} className="col">
                  <div className="chart_styling">
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <GraphStyling title="Pie Chart" />
                    </Col>
                    <div className="simple_chart">
                      <PieChart height={300} aspectratio={false} />
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} className="col">
                  <div className="chart_styling">
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <GraphStyling title="Line Chart" />
                    </Col>
                    <div className="simple_chart">
                      <LineChart aspectratio={false} />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="around-lg around-md">
                <Col xs={12} sm={12} md={6} lg={6} className="col">
                  <div className="chart_styling">
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <GraphStyling title="Horizontal Bar Chart" />
                    </Col>
                    <div className="simple_chart">
                      <HorizontalBarChart height={300} aspectratio={false} />
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} className="col">
                  <div className="chart_styling">
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <GraphStyling title="Simple Line Chart" />
                    </Col>
                    <div className="simple_chart">
                      <SimpleLineChart height={300} aspectratio={false} />
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(fetchData)(TestContainer);
