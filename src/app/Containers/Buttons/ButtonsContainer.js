import React, { Component } from "react";
// import "./Styles.scss";
import SideNavigation from "../../components/Navigation/SideNavigation";
import StyledButton from "../../components/Button/Button";
import Buttontest from "../../components/Button/ButtonTest";

import { Row, Col, Grid } from "react-flexbox-grid";

class ButtonsContainer extends Component {
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
                  <a href="dashboard">Home</a> / Components / Buttons
                </span>
              </div>
              <Row>
                <Col xs={12} sm={6} md={6} lg={6} className="grid">
                  <StyledButton theme="primary" title="Primary" />
                  <StyledButton theme="secondary" title="Secondary" />
                  <StyledButton theme="success" title="Success" />
                  <StyledButton theme="warning" title="Warning" />
                  <StyledButton theme="danger" title="Danger" />
                  <StyledButton theme="default" title="Default" />
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} className="grid">
                  <Buttontest title="test" theme="danger" />
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonsContainer;
