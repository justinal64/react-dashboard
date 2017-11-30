import React, { Component } from "react";
import SideNavigation from "../../components/Navigation/SideNavigation";
import SampleData from "../../../sample-data";
import { connect } from "react-redux";
import fetchData from "../../../actions/fetch_data";
import Header from "../../components/Typography/Header/Header";
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
      <div id="body">
        <div id="left" className="column">
          <div className="top-left">
            <h4>JL Designs</h4>
          </div>
          <div className="bottom">
            <SideNavigation />
          </div>
        </div>
        <div id="right" className="column">
          <div className="top-right">Top Right Header</div>
          <div className="bottom">
            <Grid fluid>
              <Row className="around-lg around-md">
                <Col xs={12} sm={12} md={6} lg={6} className="col">
                  <div className="chart_styling">
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <Header title="Test" />
                    </Col>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} className="col">
                  <div className="chart_styling">
                    <Col xs={12} sm={12} md={12} lg={12}>
                      Test Container 2
                    </Col>
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
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

export default connect(mapStateToProps, { fetchData })(TestContainer);
