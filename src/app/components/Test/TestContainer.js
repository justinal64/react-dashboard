import React, { Component } from "react";
import "./Styles.scss";
import SideNavigation from "../Navigation/SideNavigation";
import GraphHeader from "../Typography/GraphHeader/GraphHeader";
import LineChart from "../Charts/LineChart/LineChart";
import GaugeChart from "../Charts/GaugeChart/GaugeChart";
import {
  VictoryArea,
  VictoryTheme,
  VictoryChart,
  VictoryLine,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryAxis
} from "victory";
import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";

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
        <Grid fluid>
          <h2>Dashboard</h2>
          <Row center="lg" center="xs" around="lg" className="row">
            <Col xs={12} sm={6} md={6} lg={3} className="green_bg">
              <div className="left-align">
                <span className="header">9,123</span>
                <span className="subheader">Visitors Online</span>
              </div>
              <div>
                <VictoryChart
                  containerComponent={
                    <VictoryVoronoiContainer
                      dimension="x"
                      labels={d => `Visitors Per Hour: ${d.y}`}
                      labelComponent={
                        <VictoryTooltip
                          style={{
                            data: {
                              fill: "#fff",
                              strokeWidth: 15,
                              strokeLinecap: "round"
                            }
                          }}
                          cornerRadius={0}
                          flyoutStyle={{
                            fill: "black",
                            color: "white",
                            strokeWidth: 15,
                            strokeLinecap: "round"
                          }}
                        />
                      }
                    />
                  }
                >
                  <VictoryAxis />
                  <VictoryArea
                    width={200}
                    height={200}
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
                      },
                      labels: { fill: "white" }
                    }}
                    data={dataVO}
                    y0={d => d.y - 1}
                  />
                </VictoryChart>
              </div>
              {/* <VictoryArea
                width={200}
                height={200}
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
                data={dataVO}
                y0={d => d.y - 1}
              /> */}
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="red_bg">
              <div className="left-align">
                <span className="header">4,121</span>
                <span className="subheader">Page Views</span>
              </div>
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
                data={dataPV}
                y0={d => d.y - 1}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="blue_bg">
              <div className="left-align">
                <span className="header">2,194</span>
                <span className="subheader">New Users</span>
              </div>
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
                data={dataNU}
                y0={d => d.y - 1}
              />
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

// events={[
//   {
//     target: "parent",
//     eventHandlers: {
//       onClick: () => {
//         return [
//           {
//             target: "data",
//             eventKey: "all",
//             mutation: props => {
//               const stroke =
//                 props.style && props.style.stroke;
//               return stroke === "black"
//                 ? null
//                 : { style: { stroke: "black" } };
//             }
//           },
//           {
//             target: "labels",
//             eventKey: 2,
//             mutation: props => {
//               return props.text ? null : { text: "clicked" };
//             }
//           }
//         ];
//       }
//     }
//   }
// ]}
