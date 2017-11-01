import React, { Component } from "react";
// import "./Styles.scss";
import SideNavigation from "../../components/Navigation/SideNavigation";
import StyledSocialButton from "../../components/Button/SocialButton";
import Header from "../../components/Typography/Header/Header";
import { Row, Col, Grid } from "react-flexbox-grid";

const sm = {
  twitter: "twitter",
  facebook: "facebook",
  linkedin: "linkedin",
  flickr: "flickr",
  tumblr: "tumblr",
  xing: "xing",
  github: "github",
  html5: "html5",
  openid: "openid",
  stackoverflow: "stack-overflow",
  css3: "css3",
  youtube: "youtube",
  dribbble: "dribbble",
  "google+": "google-plus",
  instagram: "instagram",
  pinterest: "pinterest",
  vk: "vk",
  yahoo: "yahoo",
  behance: "behance",
  dropbox: "dropbox",
  reddit: "reddit",
  spotify: "spotify",
  vine: "vine",
  forsquare: "foursquare",
  vimeo: "vimeo"
};

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
                      title="Social Media Buttons"
                      subtitle="Usage Example"
                      codetext="<StyledSocialButton title='Facebook' icon='facebook'></StyledSocialButton>"
                      font={1.5}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Small"
                      subtitle="add this parameter"
                      codetext="size=&quot;small&quot;"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    {Object.entries(sm).map(function(item) {
                      let title = item[0];
                      let social = item[1];
                      return (
                        <StyledSocialButton
                          key={item}
                          title={title}
                          icon={social}
                          size="small"
                          social={social}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Medium"
                      subtitle="add this parameter"
                      codetext="size=&quot;medium&quot;"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    {Object.entries(sm).map(function(item) {
                      let title = item[0];
                      let social = item[1];
                      return (
                        <StyledSocialButton
                          key={item}
                          title={title}
                          icon={social}
                          size="medium"
                          social={social}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Large"
                      subtitle="add this parameter"
                      codetext="size=&quot;large&quot;"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    {Object.entries(sm).map(function(item) {
                      let title = item[0];
                      let social = item[1];
                      return (
                        <StyledSocialButton
                          key={item}
                          title={title}
                          icon={social}
                          size="large"
                          social={social}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="card_header card_bg">
                    <Header
                      title="Social Media Buttons"
                      subtitle="Icon Only"
                      codetext="<StyledSocialButton icon='facebook'></StyledSocialButton>"
                      font={1.5}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Small"
                      subtitle="add this parameter"
                      codetext="size=&quot;small&quot;"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    {Object.entries(sm).map(function(item) {
                      let title = item[0];
                      let social = item[1];
                      return (
                        <StyledSocialButton
                          key={item}
                          icon={social}
                          size="small"
                          social={social}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Medium"
                      subtitle="add this parameter"
                      codetext="size=&quot;medium&quot;"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    {Object.entries(sm).map(function(item) {
                      let title = item[0];
                      let social = item[1];
                      return (
                        <StyledSocialButton
                          key={item}
                          icon={social}
                          size="medium"
                          social={social}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Large"
                      subtitle="add this parameter"
                      codetext="size=&quot;large&quot;"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    {Object.entries(sm).map(function(item) {
                      let title = item[0];
                      let social = item[1];
                      return (
                        <StyledSocialButton
                          key={item}
                          icon={social}
                          size="large"
                          social={social}
                        />
                      );
                    })}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="card_header card_bg">
                    <Header
                      title="Social Media Buttons"
                      subtitle="Text Only"
                      codetext="<StyledSocialButton title='Facebook'></StyledSocialButton>"
                      font={1.5}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Small"
                      subtitle="add this parameter"
                      codetext="size=&quot;small&quot;"
                      font={1.5}
                    />
                  </div>
                  {/* <div className="card_body card_bg">
                    {Object.entries(sm).map(function(item) {
                      let title = item[0];
                      let social = item[1];
                      return (
                        <StyledSocialButton
                          key={item}
                          title={title}
                          size="small"
                          social={social}
                        />
                      );
                    })}
                  </div> */}
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Medium"
                      subtitle="add this parameter"
                      codetext="size=&quot;medium&quot;"
                      font={1.5}
                    />
                  </div>
                  {/* <div className="card_body card_bg">
                    {Object.entries(sm).map(function(item) {
                      let title = item[0];
                      let social = item[1];
                      return (
                        <StyledSocialButton
                          key={item}
                          title={title}
                          size="medium"
                          social={social}
                        />
                      );
                    })}
                  </div> */}
                </Col>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="card_header card_bg">
                    <Header
                      title="Size Large"
                      subtitle="add this parameter"
                      codetext="size=&quot;large&quot;"
                      font={1.5}
                    />
                  </div>
                  {/* <div className="card_body card_bg">
                    {Object.entries(sm).map(function(item) {
                      let title = item[0];
                      let social = item[1];
                      return (
                        <StyledSocialButton
                          key={item}
                          title={title}
                          size="large"
                          social={social}
                        />
                      );
                    })}
                  </div> */}
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
