import React, { Component } from "react";
// import "./Styles.scss";
import SideNavigation from "../../components/Navigation/SideNavigation";
import StyledButton from "../../components/Button/Button";
import StyledLink from "../../components/Link/Link";
import GraphHeader from "../../components/Typography/GraphHeader/GraphHeader";
import Header from "../../components/Typography/Header/Header";
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
                    {/* Add Example of how to add icon here */}
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton title="Primary" inverted />
                    <StyledButton title="Secondary" inverted />
                    <StyledButton title="Success" inverted />
                    <StyledButton title="Warning" inverted />
                    <StyledButton title="Danger" inverted />
                    <StyledLink title="Link" />
                  </div>
                </Col>
              </Row>
              <Row>
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
                    <GraphHeader title="With Icons" font={1.25} />
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton title="Primary" icon="star" inverted />
                    <StyledButton
                      title="Secondary"
                      icon="lightbulb-o"
                      inverted
                    />
                    <StyledButton title="Success" icon="magic" inverted />
                    <StyledButton
                      title="Warning"
                      icon="exclamation-triangle"
                      inverted
                    />
                    <StyledButton title="Danger" icon="feed" inverted />
                    <StyledLink title="Link" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Large"
                      subtitle="add this parameter"
                      codetext="font={1.25}"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton title="Primary" font={1.25} />
                    <StyledButton title="Secondary" font={1.25} />
                    <StyledButton title="Success" font={1.25} />
                    <StyledButton title="Warning" font={1.25} />
                    <StyledButton title="Danger" font={1.25} />
                    <StyledLink title="Link" />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Large"
                      subtitle="add this parameter"
                      codetext="font={1.25}"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton title="Primary" inverted font={1.25} />
                    <StyledButton title="Secondary" inverted font={1.25} />
                    <StyledButton title="Success" inverted font={1.25} />
                    <StyledButton title="Warning" inverted font={1.25} />
                    <StyledButton title="Danger" inverted font={1.25} />
                    <StyledLink title="Link" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Small"
                      subtitle="add this parameter"
                      codetext="font={.875}"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton title="Primary" font={0.875} />
                    <StyledButton title="Secondary" font={0.875} />
                    <StyledButton title="Success" font={0.875} />
                    <StyledButton title="Warning" font={0.875} />
                    <StyledButton title="Danger" font={0.875} />
                    <StyledLink title="Link" />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Small"
                      subtitle="add this parameter"
                      codetext="font={.875}"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton title="Primary" inverted font={0.875} />
                    <StyledButton title="Secondary" inverted font={0.875} />
                    <StyledButton title="Success" inverted font={0.875} />
                    <StyledButton title="Warning" inverted font={0.875} />
                    <StyledButton title="Danger" inverted font={0.875} />
                    <StyledLink title="Link" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <Header
                      title="Disabled State"
                      subtitle="add this parameter"
                      codetext="disabled"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton title="Primary" font={0.875} disabled />
                    <StyledButton title="Secondary" font={0.875} disabled />
                    <StyledButton title="Success" font={0.875} disabled />
                    <StyledButton title="Warning" font={0.875} disabled />
                    <StyledButton title="Danger" font={0.875} disabled />
                    <StyledLink title="Link" />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <Header
                      title="Disabled State"
                      subtitle="add this parameter"
                      codetext="disabled"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton
                      title="Primary"
                      inverted
                      disabled
                      font={0.875}
                    />
                    <StyledButton
                      title="Secondary"
                      inverted
                      font={0.875}
                      disabled
                    />
                    <StyledButton
                      title="Success"
                      inverted
                      font={0.875}
                      disabled
                    />
                    <StyledButton
                      title="Warning"
                      inverted
                      font={0.875}
                      disabled
                    />
                    <StyledButton
                      title="Danger"
                      inverted
                      font={0.875}
                      disabled
                    />
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
