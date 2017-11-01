import React, { Component } from "react";
import Header from "../../components/Typography/Header/Header";
import SideNavigation from "../../components/Navigation/SideNavigation";
import { Row, Col, Grid } from "react-flexbox-grid";

class CardConatiner extends Component {
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
              <div>
                <span>
                  <a href="dashboard">Home</a> /
                  <a href="dashboard">Components</a> / Cards
                </span>
              </div>
              <Row>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <div className="card_header card_bg_grey">
                    <Header title="Card Title" />
                  </div>
                  <div className="card_body card_bg_body">
                    This is the paragraph of thr card
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  Test
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  Test
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} md={6} lg={4}>
                  Test
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  Test
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  Test
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default CardConatiner;
