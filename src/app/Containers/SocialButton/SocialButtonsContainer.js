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
                      codetext="size=&quot;small&quot;"
                      font={1.5}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <StyledSocialButton
                      title="Facebook"
                      icon="facebook"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Twitter"
                      icon="twitter"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Linkedin"
                      icon="linkedin"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Flickr"
                      icon="flickr"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Tumblr"
                      icon="tumblr"
                      size="small"
                    />
                    <StyledSocialButton title="Xing" icon="xing" size="small" />
                    <StyledSocialButton
                      title="Github"
                      icon="github"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Html5"
                      icon="html5"
                      size="small"
                    />
                    <StyledSocialButton
                      title="OpenId"
                      icon="openid"
                      size="small"
                    />
                    <StyledSocialButton
                      title="StackOverflow"
                      icon="stack-overflow"
                      size="small"
                    />
                    <StyledSocialButton title="Css3" icon="css3" size="small" />
                    <StyledSocialButton
                      title="Youtube"
                      icon="youtube"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Dribbble"
                      icon="dribbble"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Google+"
                      icon="google-plus"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Instagram"
                      icon="instagram"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Pinterest"
                      icon="pinterest"
                      size="small"
                    />
                    <StyledSocialButton title="VK" icon="vk" size="small" />
                    <StyledSocialButton
                      title="Yahoo"
                      icon="yahoo"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Behance"
                      icon="behance"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Dropbox"
                      icon="dropbox"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Reddit"
                      icon="reddit"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Spotify"
                      icon="spotify"
                      size="small"
                    />
                    <StyledSocialButton title="Vine" icon="vine" size="small" />
                    <StyledSocialButton
                      title="Forsquare"
                      icon="foursquare"
                      size="small"
                    />
                    <StyledSocialButton
                      title="Vimeo"
                      icon="vimeo"
                      size="small"
                    />
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
