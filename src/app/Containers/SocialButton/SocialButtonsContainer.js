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
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                  <div className="card_header card_bg">
                    <Header title="Size Normal" font={1.5} />
                  </div>
                  <div className="card_body card_bg">
                    <StyledSocialButton title="Facebook" icon="facebook" />
                    <StyledSocialButton title="Twitter" icon="twitter" />
                    <StyledSocialButton title="Linkedin" icon="linkedin" />
                    <StyledSocialButton title="Flickr" icon="flickr" />
                    <StyledSocialButton title="Tumblr" icon="tumblr" />
                    <StyledSocialButton title="Xing" icon="xing" />
                    <StyledSocialButton title="Github" icon="github" />
                    <StyledSocialButton title="Html5" icon="html5" />
                    <StyledSocialButton title="OpenId" icon="openid" />
                    <StyledSocialButton
                      title="StackOverflow"
                      icon="stack-overflow"
                    />
                    <StyledSocialButton title="Css3" icon="css3" />
                    <StyledSocialButton title="Youtube" icon="youtube" />
                    <StyledSocialButton title="Dribbble" icon="dribbble" />
                    <StyledSocialButton title="Google+" icon="google-plus" />
                    <StyledSocialButton title="Instagram" icon="instagram" />
                    <StyledSocialButton title="Pinterest" icon="pinterest" />
                    <StyledSocialButton title="VK" icon="vk" />
                    <StyledSocialButton title="Yahoo" icon="yahoo" />
                    <StyledSocialButton title="Behance" icon="behance" />
                    <StyledSocialButton title="Dropbox" icon="dropbox" />
                    <StyledSocialButton title="Reddit" icon="reddit" />
                    <StyledSocialButton title="Spotify" icon="spotify" />
                    <StyledSocialButton title="Vine" icon="vine" />
                    <StyledSocialButton title="Forsquare" icon="foursquare" />
                    <StyledSocialButton title="Vimeo" icon="vimeo" />
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
                    <StyledSocialButton
                      title="Facebook"
                      icon="facebook"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Twitter"
                      icon="twitter"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Linkedin"
                      icon="linkedin"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Flickr"
                      icon="flickr"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Tumblr"
                      icon="tumblr"
                      size="large"
                    />
                    <StyledSocialButton title="Xing" icon="xing" size="large" />
                    <StyledSocialButton
                      title="Github"
                      icon="github"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Html5"
                      icon="html5"
                      size="large"
                    />
                    <StyledSocialButton
                      title="OpenId"
                      icon="openid"
                      size="large"
                    />
                    <StyledSocialButton
                      title="StackOverflow"
                      icon="stack-overflow"
                      size="large"
                    />
                    <StyledSocialButton title="Css3" icon="css3" size="large" />
                    <StyledSocialButton
                      title="Youtube"
                      icon="youtube"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Dribbble"
                      icon="dribbble"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Google+"
                      icon="google-plus"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Instagram"
                      icon="instagram"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Pinterest"
                      icon="pinterest"
                      size="large"
                    />
                    <StyledSocialButton title="VK" icon="vk" size="large" />
                    <StyledSocialButton
                      title="Yahoo"
                      icon="yahoo"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Behance"
                      icon="behance"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Dropbox"
                      icon="dropbox"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Reddit"
                      icon="reddit"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Spotify"
                      icon="spotify"
                      size="large"
                    />
                    <StyledSocialButton title="Vine" icon="vine" size="large" />
                    <StyledSocialButton
                      title="Forsquare"
                      icon="foursquare"
                      size="large"
                    />
                    <StyledSocialButton
                      title="Vimeo"
                      icon="vimeo"
                      size="large"
                    />
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

export default SocialButtonsContainer;
