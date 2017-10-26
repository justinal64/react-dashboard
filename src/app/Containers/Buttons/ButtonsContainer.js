import React, { Component } from "react";
// import "./Styles.scss";
import SideNavigation from "../../components/Navigation/SideNavigation";
import StyledButton from "../../components/Button/Button";
import StyledLink from "../../components/Button/Link";
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
                    <StyledButton title="Primary" button="Primary" />
                    <StyledButton title="Secondary" button="Secondary" />
                    <StyledButton title="Success" button="Success" />
                    <StyledButton title="Warning" button="Warning" />
                    <StyledButton title="Danger" button="Danger" />
                    <StyledLink title="Link" />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <GraphHeader title="Options" font={1.25} />
                    {/* Add Example of how to add icon here */}
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton title="Primary" button="Primary" inverted />
                    <StyledButton
                      title="Secondary"
                      button="Secondary"
                      inverted
                    />
                    <StyledButton title="Success" button="Success" inverted />
                    <StyledButton title="Warning" button="Warning" inverted />
                    <StyledButton title="Danger" button="Danger" inverted />
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
                    <StyledButton
                      title="Primary"
                      button="Primary"
                      icon="star"
                    />
                    <StyledButton
                      title="Secondary"
                      button="Secondary"
                      icon="lightbulb-o"
                    />
                    <StyledButton
                      title="Success"
                      button="Success"
                      icon="magic"
                    />
                    <StyledButton
                      title="Warning"
                      button="Warning"
                      icon="exclamation-triangle"
                    />
                    <StyledButton title="Danger" button="Danger" icon="feed" />
                    <StyledLink title="Link" />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <GraphHeader title="With Icons" font={1.25} />
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton
                      title="Primary"
                      button="Primary"
                      icon="star"
                      inverted
                    />
                    <StyledButton
                      title="Secondary"
                      button="Secondary"
                      icon="lightbulb-o"
                      inverted
                    />
                    <StyledButton
                      title="Success"
                      button="Success"
                      icon="magic"
                      inverted
                    />
                    <StyledButton
                      title="Warning"
                      button="Warning"
                      icon="exclamation-triangle"
                      inverted
                    />
                    <StyledButton
                      title="Danger"
                      button="Danger"
                      icon="feed"
                      inverted
                    />
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
                    <StyledButton
                      title="Primary"
                      button="Primary"
                      font={1.25}
                    />
                    <StyledButton
                      title="Secondary"
                      button="Secondary"
                      font={1.25}
                    />
                    <StyledButton
                      title="Success"
                      button="Success"
                      font={1.25}
                    />
                    <StyledButton
                      title="Warning"
                      button="Warning"
                      font={1.25}
                    />
                    <StyledButton title="Danger" button="Danger" font={1.25} />
                    <StyledLink title="Link" font={1.25} />
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
                    <StyledButton
                      title="Primary"
                      button="Primary"
                      inverted
                      font={1.25}
                    />
                    <StyledButton
                      title="Secondary"
                      button="Secondary"
                      inverted
                      font={1.25}
                    />
                    <StyledButton
                      title="Success"
                      button="Success"
                      inverted
                      font={1.25}
                    />
                    <StyledButton
                      title="Warning"
                      button="Warning"
                      inverted
                      font={1.25}
                    />
                    <StyledButton
                      title="Danger"
                      button="Danger"
                      inverted
                      font={1.25}
                    />
                    <StyledLink title="Link" font={1.25} />
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
                    <StyledButton
                      title="Primary"
                      button="Primary"
                      font={0.875}
                    />
                    <StyledButton
                      title="Secondary"
                      button="Secondary"
                      font={0.875}
                    />
                    <StyledButton
                      title="Success"
                      button="Success"
                      font={0.875}
                    />
                    <StyledButton
                      title="Warning"
                      button="Warning"
                      font={0.875}
                    />
                    <StyledButton title="Danger" button="Danger" font={0.875} />
                    <StyledLink title="Link" font={0.875} />
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
                    <StyledButton
                      title="Primary"
                      button="Primary"
                      inverted
                      font={0.875}
                    />
                    <StyledButton
                      title="Secondary"
                      button="Secondary"
                      inverted
                      font={0.875}
                    />
                    <StyledButton
                      title="Success"
                      button="Success"
                      inverted
                      font={0.875}
                    />
                    <StyledButton
                      title="Warning"
                      button="Warning"
                      inverted
                      font={0.875}
                    />
                    <StyledButton
                      title="Danger"
                      button="Danger"
                      inverted
                      font={0.875}
                    />
                    <StyledLink title="Link" font={0.875} />
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
                    <StyledButton title="Primary" button="Primary" disabled />
                    <StyledButton
                      title="Secondary"
                      button="Secondary"
                      disabled
                    />
                    <StyledButton title="Success" button="Success" disabled />
                    <StyledButton title="Warning" button="Warning" disabled />
                    <StyledButton title="Danger" button="Danger" disabled />
                    <StyledLink title="Link" disabled />
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
                      button="Primary"
                      inverted
                      disabled
                    />
                    <StyledButton
                      title="Secondary"
                      button="Secondary"
                      inverted
                      disabled
                    />
                    <StyledButton
                      title="Success"
                      button="Success"
                      inverted
                      disabled
                    />
                    <StyledButton
                      title="Warning"
                      button="Warning"
                      inverted
                      disabled
                    />
                    <StyledButton
                      title="Danger"
                      button="Danger"
                      inverted
                      disabled
                    />
                    <StyledLink title="Link" disabled />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <Header
                      title="Active State"
                      subtitle="add this parameter"
                      codetext="nothing..."
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton title="Primary" button="Primary" />
                    <StyledButton title="Secondary" button="Secondary" />
                    <StyledButton title="Success" button="Success" />
                    <StyledButton title="Warning" button="Warning" />
                    <StyledButton title="Danger" button="Danger" />
                    <StyledLink title="Link" />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <Header
                      title="Active State"
                      subtitle="add this parameter"
                      codetext="nothing..."
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton title="Primary" button="Primary" inverted />
                    <StyledButton
                      title="Secondary"
                      button="Secondary"
                      inverted
                    />
                    <StyledButton title="Success" button="Success" inverted />
                    <StyledButton title="Warning" button="Warning" inverted />
                    <StyledButton title="Danger" button="Danger" inverted />
                    <StyledLink title="Link" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <Header
                      title="Active State"
                      subtitle="add this parameter"
                      codetext="block"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton
                      title="Block Level Button"
                      button="Primary"
                      block
                    />
                    <StyledButton
                      title="Block Level Button"
                      button="Secondary"
                      block
                    />
                    <StyledButton
                      title="Block Level Button"
                      button="Success"
                      block
                    />
                    <StyledButton
                      title="Block Level Button"
                      button="Warning"
                      block
                    />
                    <StyledButton
                      title="Block Level Button"
                      button="Danger"
                      block
                    />
                    <StyledLink title="Link" block />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <Header
                      title="Active State"
                      subtitle="add this parameter"
                      codetext="block"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <StyledButton
                      title="Block Level Button"
                      button="Primary"
                      inverted
                      block
                    />
                    <StyledButton
                      title="Block Level Button"
                      button="Secondary"
                      inverted
                      block
                    />
                    <StyledButton
                      title="Block Level Button"
                      button="Success"
                      inverted
                      block
                    />
                    <StyledButton
                      title="Block Level Button"
                      button="Warning"
                      inverted
                      block
                    />
                    <StyledButton
                      title="Block Level Button"
                      button="Danger"
                      inverted
                      block
                    />
                    <StyledLink title="Link" block />
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
