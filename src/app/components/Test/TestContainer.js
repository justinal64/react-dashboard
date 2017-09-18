import React, { Component } from "react";
import "./Styles.scss";
import SideNavigation from "../Navigation/SideNavigation";

import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";

import Split from "grommet/components/Split";
import { Row, Col, Grid } from "react-flexbox-grid";

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
          <Row center="xs">
            <Col className="test" xs={12} sm={6} md={4} lg={4}>
              xs 12 sm 3 md 2 lg 1
            </Col>
            <Col className="test" xs={12} sm={6} md={4} lg={4}>
              xs 12 sm 3 md 2 lg 1
            </Col>
            <Col className="test" xs={12} sm={6} md={4} lg={4}>
              xs 12 sm 3 md 2 lg 1
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
