import React, { Component } from "react";

// import LineChart from "../Charts/LineChart/LineChart";
// import GaugeChart from "../Charts/GaugeChart/GaugeChart";
// import CombinationChart from "../Charts/CombinationChart/CombinationChart";
// import BarChart from "../Charts/BarChart/BarChart";
// import PieChart from "../Charts/PieChart/PieChart";
// import PolarChart from "../Charts/PolarChart/PolarChart";
// import DonutChart from "../Charts/DonutChart/DonutChart";
import SideNavigation from "../../components/Navigation/SideNavigation";
// import Segment from "../Typography/Segment/Segment";
// import GraphFooter from "../Typography/GraphFooter/GraphFooter";
// import GraphHeader from "../Typography/GraphHeader/GraphHeader";

import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";

import Split from "grommet/components/Split";
import Section from "grommet/components/Section";
// import Heading from "grommet/components/Heading";
// import Box from "grommet/components/Box";
// import Headline from "grommet/components/Headline";

class FormsContainer extends Component {
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
          <Segment title={"Forms Container"} />
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

export default connect(mapStateToProps, { fetchData })(FormsContainer);
