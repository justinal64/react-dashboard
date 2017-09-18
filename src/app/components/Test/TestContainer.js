import React, { Component } from "react";
// import "./Styles.css";
import SideNavigation from "../Navigation/SideNavigation";

import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";

import Split from "grommet/components/Split";
import { Row, Col } from "react-flexbox-grid";

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
        <Row>
          <Col xs={12} sm={3} md={2} lg={1}>
            xs 12 sm 3 md 2 lg 1
          </Col>
          <Col xs={6} sm={6} md={8} lg={10}>
            xs 6 sm 6 md 8 lg 10
          </Col>
          <Col xs={6} sm={3} md={2} lg={1}>
            xs 6 sm 3 md 2 lg 1
          </Col>
        </Row>
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
