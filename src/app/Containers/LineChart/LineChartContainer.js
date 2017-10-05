import React, { Component } from "react";

import SideNavigation from "../../components/Navigation/SideNavigation";

import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";

class LineChartContainer extends Component {
  componentWillMount() {
    // this.props.fetchData();
  }

  componentDidMount() {
    // setInterval(this.props.fetchData.bind(this), 100000); // 300000 = 5 minutes
  }
  render() {
    return (
      <div>LineChartContainer</div>
      // <Split flex="right">
      //   <SideNavigation />

      //   <Section colorIndex="grey-1">LineChartContainer</Section>
      // </Split>
    );
  }
}

// connect react with redux
// @params mapStateToProps (necessity)
// @params mapDispatchToProps (optional)
function mapStateToProps(state) {
  return { astronomy: state.astronomy };
}

export default connect(mapStateToProps, { fetchData })(LineChartContainer);
