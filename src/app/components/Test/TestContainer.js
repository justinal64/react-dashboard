import React, { Component } from "react";
import "./Styles.scss";
import SideNavigation from "../Navigation/SideNavigation";

import LineChart from "../Charts/LineChart/LineChart";
import GaugeChart from "../Charts/GaugeChart/GaugeChart";
import { VictoryArea, VictoryTheme } from "victory";
import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";

import Split from "grommet/components/Split";
import { Row, Col, Grid } from "react-flexbox-grid";

const data = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 6 }
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
        <Grid fluid>
          <Row center="lg" center="xs" around="lg">
            <Col xs={12} sm={6} md={6} lg={4} className="bg">
              <VictoryArea
                interpolation="natural"
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 }
                }}
                style={{
                  data: {
                    fill: "#fff",
                    strokeWidth: 15,
                    strokeLinecap: "round"
                  }
                }}
                data={data}
                y0={d => d.y - 1}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              <VictoryArea
                interpolation="natural"
                data={data}
                y0={d => d.y - 1}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              <VictoryArea interpolation="natural" data={data} />
            </Col>
          </Row>
        </Grid>
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
