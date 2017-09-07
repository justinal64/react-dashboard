import React, { Component } from "react";
import DashboardCard from "./DashboardCard";
import { connect } from "react-redux";
import fetchData from "../../actions/fetch_data";
import SidebarMenu from "./SidebarMenu";

class DashboardContainer extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  componentDidMount() {
    setInterval(this.props.fetchData.bind(this), 100000); // 300000 = 5 minutes
  }
  render() {
    return (
      <div>
        <SidebarMenu />
        <DashboardCard data={this.props.astronomy} />
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

export default connect(mapStateToProps, { fetchData })(DashboardContainer);
