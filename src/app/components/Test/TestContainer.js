import React, { Component } from "react";
import "./Styles.scss";
import SideNavigation from "../Navigation/SideNavigation";
import GraphHeader from "../Typography/GraphHeader/GraphHeader";

import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";
import BarChart from "../ChartJS/BarChart";
import LineChart from "../ChartJS/LineChart";
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
        <Grid fluid>
          <h2>Dashboard</h2>
          <Row center="lg" center="xs" around="lg" className="row">
            <Col xs={12} sm={6} md={6} lg={3} className="green_bg">
              LineChart
              <LineChart />
            </Col>
            <Col xs={12} sm={6} md={6} lg={12}>
              LineChart
              <LineChart />
            </Col>
            <Col xs={12} sm={6} md={6} lg={12}>
              BarChart
              <PieChart />
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="red_bg">
              <BarChart />
              {/* <BasicChart /> */}
              {/* <div className="left-align">
                <span className="header">4,121</span>
                <span className="subheader">Page Views</span>
              </div> */}
            </Col>
            <Col xs={12} sm={6} md={6} lg={3} className="blue_bg">
              <div className="left-align">
                <span className="header">2,194</span>
                <span className="subheader">New Users</span>
              </div>
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
