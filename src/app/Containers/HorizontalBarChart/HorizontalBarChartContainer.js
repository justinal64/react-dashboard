import React, { Component } from "react";

import SideNavigationTest from "../../components/Navigation/SideNavigationTest";

import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";

class HorizontalBarChartContainer extends Component {
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
          <SideNavigationTest />
        </div>
        <div className="barchart box">HorizontalBarChartContainer</div>
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

export default connect(mapStateToProps, { fetchData })(
  HorizontalBarChartContainer
);
