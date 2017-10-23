import React, { Component } from "react";
// import "./Styles.scss";
import SideNavigation from "../../components/Navigation/SideNavigation";
import StyledButton from "../../components/Button/Button";
import StyledLink from "../../components/Link/Link";
import GraphHeader from "../../components/Typography/GraphHeader/GraphHeader";
import InvertedButton from "../../components/Button/InvertedButton";
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
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <GraphHeader title="Options" font={1.25} />
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton title="Primary" />
                    <StyledButton title="Secondary" />
                    <StyledButton title="Success" />
                    <StyledButton title="Warning" />
                    <StyledButton title="Danger" />
                    <StyledLink title="Link" />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <GraphHeader title="Options" font={1.25} />
                  </div>
                  <div className="card_body card_bg">
                    <InvertedButton title="Primary" />
                    <InvertedButton title="Secondary" />
                    <InvertedButton title="Success" />
                    <InvertedButton title="Warning" />
                    <InvertedButton title="Danger" />

                    <StyledLink title="Link" />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <GraphHeader title="With Icons" font={1.25} />
                    {/* Add Example of how to add icon here */}
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton title="Primary" icon="star" />
                    <StyledButton title="Secondary" icon="lightbulb-o" />
                    <StyledButton title="Success" icon="magic" />
                    <StyledButton title="Warning" icon="exclamation-triangle" />
                    <StyledButton title="Danger" icon="feed" />
                    <StyledLink title="Link" />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <GraphHeader title="Options" font={1.25} />
                  </div>
                  <div className="card_body card_bg">
                    <InvertedButton title="Primary" button="danger" />
                    <InvertedButton title="Primary" button="primary" />
                    <InvertedButton title="Primary" button="danger" />
                    <InvertedButton title="Primary" button="danger" />
                    <InvertedButton title="Primary" button="danger" />

                    <StyledLink title="Link" />
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

export default ButtonsContainer;
