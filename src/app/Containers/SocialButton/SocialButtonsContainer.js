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
                    <StyledSocialButton
                      title="Facebook"
                      icon="facebook"
                      size="small"
                      social="facebook"
                    />
                    <StyledSocialButton
                      title="Twitter"
                      icon="twitter"
                      size="small"
                      social="twitter"
                    />
                    <StyledSocialButton
                      title="Linkedin"
                      icon="linkedin"
                      size="small"
                      social="linkedin"
                    />
                    <StyledSocialButton
                      title="Flickr"
                      icon="flickr"
                      size="small"
                      social="flickr"
                    />
                    <StyledSocialButton
                      title="Tumblr"
                      icon="tumblr"
                      size="small"
                      social="tumblr"
                    />
                    <StyledSocialButton
                      title="Xing"
                      icon="xing"
                      size="small"
                      social="xing"
                    />
                    <StyledSocialButton
                      title="Github"
                      icon="github"
                      size="small"
                      social="github"
                    />
                    <StyledSocialButton
                      title="Html5"
                      icon="html5"
                      size="small"
                      social="html5"
                    />
                    <StyledSocialButton
                      title="OpenId"
                      icon="openid"
                      size="small"
                      social="openid"
                    />
                    <StyledSocialButton
                      title="StackOverflow"
                      icon="stack-overflow"
                      size="small"
                      social="stackoverflow"
                    />
                    <StyledSocialButton
                      title="Css3"
                      icon="css3"
                      size="small"
                      social="css3"
                    />
                    <StyledSocialButton
                      title="Youtube"
                      icon="youtube"
                      size="small"
                      social="youtube"
                    />
                    <StyledSocialButton
                      title="Dribbble"
                      icon="dribbble"
                      size="small"
                      social="dribbble"
                    />
                    <StyledSocialButton
                      title="Google+"
                      icon="google-plus"
                      size="small"
                      social="google+"
                    />
                    <StyledSocialButton
                      title="Instagram"
                      icon="instagram"
                      size="small"
                      social="instagram"
                    />
                    <StyledSocialButton
                      title="Pinterest"
                      icon="pinterest"
                      size="small"
                      social="pinterest"
                    />
                    <StyledSocialButton
                      title="VK"
                      icon="vk"
                      size="small"
                      social="vk"
                    />
                    <StyledSocialButton
                      title="Yahoo"
                      icon="yahoo"
                      size="small"
                      social="yahoo"
                    />
                    <StyledSocialButton
                      title="Behance"
                      icon="behance"
                      size="small"
                      social="behance"
                    />
                    <StyledSocialButton
                      title="Dropbox"
                      icon="dropbox"
                      size="small"
                      social="dropbox"
                    />
                    <StyledSocialButton
                      title="Reddit"
                      icon="reddit"
                      size="small"
                      social="reddit"
                    />
                    <StyledSocialButton
                      title="Spotify"
                      icon="spotify"
                      size="small"
                      social="spotify"
                    />
                    <StyledSocialButton
                      title="Vine"
                      icon="vine"
                      size="small"
                      social="vine"
                    />
                    <StyledSocialButton
                      title="Forsquare"
                      icon="foursquare"
                      size="small"
                      social="forsquare"
                    />
                    <StyledSocialButton
                      title="Vimeo"
                      icon="vimeo"
                      size="small"
                      social="vimeo"
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
                    <StyledSocialButton
                      title="Facebook"
                      icon="facebook"
                      size="medium"
                      social="facebook"
                    />
                    <StyledSocialButton
                      title="Twitter"
                      icon="twitter"
                      size="medium"
                      social="twitter"
                    />
                    <StyledSocialButton
                      title="Linkedin"
                      icon="linkedin"
                      size="medium"
                      social="linkedin"
                    />
                    <StyledSocialButton
                      title="Flickr"
                      icon="flickr"
                      size="medium"
                      social="flickr"
                    />
                    <StyledSocialButton
                      title="Tumblr"
                      icon="tumblr"
                      size="medium"
                      social="tumblr"
                    />
                    <StyledSocialButton
                      title="Xing"
                      icon="xing"
                      size="medium"
                      social="xing"
                    />
                    <StyledSocialButton
                      title="Github"
                      icon="github"
                      size="medium"
                      social="github"
                    />
                    <StyledSocialButton
                      title="Html5"
                      icon="html5"
                      size="medium"
                      social="html5"
                    />
                    <StyledSocialButton
                      title="OpenId"
                      icon="openid"
                      size="medium"
                      social="openid"
                    />
                    <StyledSocialButton
                      title="StackOverflow"
                      icon="stack-overflow"
                      size="medium"
                      social="stackoverflow"
                    />
                    <StyledSocialButton
                      title="Css3"
                      icon="css3"
                      size="medium"
                      social="css3"
                    />
                    <StyledSocialButton
                      title="Youtube"
                      icon="youtube"
                      size="medium"
                      social="youtube"
                    />
                    <StyledSocialButton
                      title="Dribbble"
                      icon="dribbble"
                      size="medium"
                      social="dribbble"
                    />
                    <StyledSocialButton
                      title="Google+"
                      icon="google-plus"
                      size="medium"
                      social="google+"
                    />
                    <StyledSocialButton
                      title="Instagram"
                      icon="instagram"
                      size="medium"
                      social="instagram"
                    />
                    <StyledSocialButton
                      title="Pinterest"
                      icon="pinterest"
                      size="medium"
                      social="pinterest"
                    />
                    <StyledSocialButton
                      title="VK"
                      icon="vk"
                      size="medium"
                      social="vk"
                    />
                    <StyledSocialButton
                      title="Yahoo"
                      icon="yahoo"
                      size="medium"
                      social="yahoo"
                    />
                    <StyledSocialButton
                      title="Behance"
                      icon="behance"
                      size="medium"
                      social="behance"
                    />
                    <StyledSocialButton
                      title="Dropbox"
                      icon="dropbox"
                      size="medium"
                      social="dropbox"
                    />
                    <StyledSocialButton
                      title="Reddit"
                      icon="reddit"
                      size="medium"
                      social="reddit"
                    />
                    <StyledSocialButton
                      title="Spotify"
                      icon="spotify"
                      size="medium"
                      social="spotify"
                    />
                    <StyledSocialButton
                      title="Vine"
                      icon="vine"
                      size="medium"
                      social="vine"
                    />
                    <StyledSocialButton
                      title="Forsquare"
                      icon="foursquare"
                      size="medium"
                      social="forsquare"
                    />
                    <StyledSocialButton
                      title="Vimeo"
                      icon="vimeo"
                      size="medium"
                      social="vimeo"
                    />
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
                      social="facebook"
                    />
                    <StyledSocialButton
                      title="Twitter"
                      icon="twitter"
                      size="large"
                      social="twitter"
                    />
                    <StyledSocialButton
                      title="Linkedin"
                      icon="linkedin"
                      size="large"
                      social="linkedin"
                    />
                    <StyledSocialButton
                      title="Flickr"
                      icon="flickr"
                      size="large"
                      social="flickr"
                    />
                    <StyledSocialButton
                      title="Tumblr"
                      icon="tumblr"
                      size="large"
                      social="tumblr"
                    />
                    <StyledSocialButton
                      title="Xing"
                      icon="xing"
                      size="large"
                      social="xing"
                    />
                    <StyledSocialButton
                      title="Github"
                      icon="github"
                      size="large"
                      social="github"
                    />
                    <StyledSocialButton
                      title="Html5"
                      icon="html5"
                      size="large"
                      social="html5"
                    />
                    <StyledSocialButton
                      title="OpenId"
                      icon="openid"
                      size="large"
                      social="openid"
                    />
                    <StyledSocialButton
                      title="StackOverflow"
                      icon="stack-overflow"
                      size="large"
                      social="stackoverflow"
                    />
                    <StyledSocialButton
                      title="Css3"
                      icon="css3"
                      size="large"
                      social="css3"
                    />
                    <StyledSocialButton
                      title="Youtube"
                      icon="youtube"
                      size="large"
                      social="youtube"
                    />
                    <StyledSocialButton
                      title="Dribbble"
                      icon="dribbble"
                      size="large"
                      social="dribbble"
                    />
                    <StyledSocialButton
                      title="Google+"
                      icon="google-plus"
                      size="large"
                      social="google+"
                    />
                    <StyledSocialButton
                      title="Instagram"
                      icon="instagram"
                      size="large"
                      social="instagram"
                    />
                    <StyledSocialButton
                      title="Pinterest"
                      icon="pinterest"
                      size="large"
                      social="pinterest"
                    />
                    <StyledSocialButton
                      title="VK"
                      icon="vk"
                      size="large"
                      social="vk"
                    />
                    <StyledSocialButton
                      title="Yahoo"
                      icon="yahoo"
                      size="large"
                      social="yahoo"
                    />
                    <StyledSocialButton
                      title="Behance"
                      icon="behance"
                      size="large"
                      social="behance"
                    />
                    <StyledSocialButton
                      title="Dropbox"
                      icon="dropbox"
                      size="large"
                      social="dropbox"
                    />
                    <StyledSocialButton
                      title="Reddit"
                      icon="reddit"
                      size="large"
                      social="reddit"
                    />
                    <StyledSocialButton
                      title="Spotify"
                      icon="spotify"
                      size="large"
                      social="spotify"
                    />
                    <StyledSocialButton
                      title="Vine"
                      icon="vine"
                      size="large"
                      social="vine"
                    />
                    <StyledSocialButton
                      title="Forsquare"
                      icon="foursquare"
                      size="large"
                      social="forsquare"
                    />
                    <StyledSocialButton
                      title="Vimeo"
                      icon="vimeo"
                      size="large"
                      social="vimeo"
                    />
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
                    <Header title="Size Small" font={1.5} />
                  </div>
                  <div className="card_body card_bg">
                    <StyledSocialButton
                      icon="facebook"
                      social="facebook"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="twitter"
                      social="twitter"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="linkedin"
                      social="linkedin"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="flickr"
                      social="flickr"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="tumblr"
                      social="tumblr"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="xing"
                      social="xing"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="github"
                      social="github"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="html5"
                      social="html5"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="openid"
                      social="openid"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="stack-overflow"
                      social="stackoverflow"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="css3"
                      social="css3"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="youtube"
                      social="youtube"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="dribbble"
                      social="dribbble"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="google-plus"
                      social="google+"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="instagram"
                      social="instagram"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="pinterest"
                      social="pinterest"
                      size="small"
                    />
                    <StyledSocialButton icon="vk" social="vk" size="small" />
                    <StyledSocialButton
                      icon="yahoo"
                      social="yahoo"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="behance"
                      social="behance"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="dropbox"
                      social="dropbox"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="reddit"
                      social="reddit"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="spotify"
                      social="spotify"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="vine"
                      social="vine"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="foursquare"
                      social="forsquare"
                      size="small"
                    />
                    <StyledSocialButton
                      icon="vimeo"
                      social="vimeo"
                      size="small"
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
