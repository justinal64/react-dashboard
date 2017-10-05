import React, { Component } from "react";
import "./Styles.scss";
import SideNavigationTest from "../../components/Navigation/SideNavigationTest";

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
      <div>
        <SideNavigationTest />
        <div id="content" className="content">
          <h1>Flexbox Off-Canvas Side Menu</h1>
          <h2>Easy to use</h2>
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
