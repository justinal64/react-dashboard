import React, { Component } from "react";
// import "./Styles.scss";
import SideNavigation from "../../components/Navigation/SideNavigation";
import StyledSocialButton from "../../components/Button/SocialButton";
import Header from "../../components/Typography/Header/Header";
import { Row, Col, Grid } from "react-flexbox-grid";

class SocialButtonsContainer extends Component {
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
                  <a href="dashboard">Components</a> / Social Buttons
                </span>
              </div>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Small"
                      subtitle="add this parameter"
                      codetext="font={1.25}"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <StyledSocialButton title="Facebook" icon="facebook" />
                    <StyledSocialButton title="Twitter" icon="twitter" />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  Test
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} md={6} lg={6}>
                  Test
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
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

export default SocialButtonsContainer;
