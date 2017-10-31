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
                    <Header title="Size Normal" font={1.5} />
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
