import React, { Component } from "react";
import DashboardCard from "./DashboardCard";
import "./Dashboard.scss";

import LineChart from "../Charts/LineChart/LineChart";
import GaugeChart from "../Charts/GaugeChart/GaugeChart";
import BarChart from "../Charts/BarChart/BarChart";
import PieChart from "../Charts/PieChart/PieChart";
import PolarChart from "../Charts/PolarChart/PolarChart";
import DonutChart from "../Charts/DonutChart/DonutChart";
import SideNavigation from "../Navigation/SideNavigation";
import Segment from "../Typography/Segment/Segment";
import GraphFooter from "../Typography/GraphFooter/GraphFooter";
import GraphHeader from "../Typography/GraphHeader/GraphHeader";

import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";

import Split from "grommet/components/Split";
import Section from "grommet/components/Section";
import Heading from "grommet/components/Heading";
import Box from "grommet/components/Box";
import Headline from "grommet/components/Headline";

class DashboardContainer extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  componentDidMount() {
    setInterval(this.props.fetchData.bind(this), 100000); // 300000 = 5 minutes
  }
  render() {
    return (
      <Split flex="right">
        <SideNavigation />

        <Section colorIndex="grey-1">
          <Segment title={"Overview"} />
          <Box
            className="stacked-row"
            direction="row"
            pad={{ vertical: "medium" }}
          >
            <Box
              className="meter-box col__span-25 equal-spacing"
              justify="start"
              pad={{ horizontal: "medium" }}
            >
              <GraphHeader title={"CPU Usage"} />
              <Box align="center">
                <GaugeChart
                  percentTotal={SampleData.GaugeChart0[0].value}
                  color={SampleData.GaugeChart0[0].color}
                />
              </Box>
              <GraphFooter updatetime={2} />
            </Box>
            <Box
              className="area-box col__span-25 equal-spacing"
              justify="start"
              pad={{ horizontal: "medium" }}
            >
              <GraphHeader title={"Memory Usage"} />
              <Box align="center">
                <GaugeChart
                  percentTotal={SampleData.GaugeChart1[0].value}
                  color={SampleData.GaugeChart1[0].color}
                />
              </Box>
              <GraphFooter updatetime={0} />
            </Box>
            <Box
              className="meter-box col__span-25 equal-spacing"
              justify="start"
              pad={{ horizontal: "medium" }}
            >
              <GraphHeader title={"Hard Drive Usage"} />
              <Box align="center">
                <GaugeChart
                  percentTotal={SampleData.GaugeChart2[0].value}
                  color={SampleData.GaugeChart2[0].color}
                />
              </Box>
              <GraphFooter updatetime={1} />
            </Box>
          </Box>
          <Box
            className="stacked-row"
            direction="row"
            pad={{ vertical: "medium" }}
          >
            <Box
              className="meter-box col__span-25 equal-spacing"
              justify="start"
              pad={{ horizontal: "medium" }}
            >
              <Box align="center">
                <LineChart />
              </Box>
              <GraphFooter updatetime={2} />
            </Box>
            <Box
              className="area-box col__span-25 equal-spacing"
              justify="start"
              pad={{ horizontal: "medium" }}
            >
              <GraphHeader title={"Memory Usage"} />
              <Box align="center">
                <GaugeChart
                  percentTotal={SampleData.GaugeChart1[0].value}
                  color={SampleData.GaugeChart1[0].color}
                />
              </Box>
              <GraphFooter updatetime={0} />
            </Box>
            <Box
              className="meter-box col__span-25 equal-spacing"
              justify="start"
              pad={{ horizontal: "medium" }}
            >
              <GraphHeader title={"Hard Drive Usage"} />
              <Box align="center">
                <GaugeChart
                  percentTotal={SampleData.GaugeChart2[0].value}
                  color={SampleData.GaugeChart2[0].color}
                />
              </Box>
              <GraphFooter updatetime={1} />
            </Box>
          </Box>
        </Section>
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

export default connect(mapStateToProps, { fetchData })(DashboardContainer);
