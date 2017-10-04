import React, { Component } from "react";
import DashboardCard from "./DashboardCard";
import "./Dashboard.scss";

import SideNavigation from "../../../app/components/Navigation/SideNavigation";
import Segment from "../../components/Typography/Segment/Segment";
import GraphFooter from "../../components/Typography/GraphFooter/GraphFooter";
import GraphHeader from "../../components/Typography/GraphHeader/GraphHeader";

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

        <Section colorIndex="grey-1">Dashboard Container</Section>
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
