import React, { Component } from "react";
import Header from "../../components/Typography/Header/Header";
import SideNavigation from "../../components/Navigation/SideNavigation";
import { getIcon } from "../../components/Helper/Helper";
import { Row, Col, Grid } from "react-flexbox-grid";
import Switch from "../../components/Switch/Switch";

const paragraph =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.";

class CardConatiner extends Component {
  componentWillMount() {
    // this.props.fetchData();
  }

  componentDidMount() {
    // setInterval(this.props.fetchData.bind(this), 100000); // 300000 = 5 minutes
  }
  render() {
    const styles = {
      float: "right"
    };
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
                  <a href="dashboard">Components</a> / Cards
                </span>
              </div>
              <Row>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <div className="card_header card_bg_grey">
                    <Header title="Card Title" />
                  </div>
                  <div className="card_body card_bg_body">{paragraph}</div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <div className="card_body_nomargin card_bg_body_reversed ">
                    {paragraph}
                  </div>
                  <div className="card_header card_bg_grey">
                    <Header title="Card Footer" />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <div className="card_header card_bg_grey">
                    <Header
                      title="Card with Icon"
                      subtitle={getIcon("check", styles)}
                    />
                  </div>
                  <div className="card_body card_bg_body">{paragraph}</div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <div className="card_header card_bg_grey">
                    {/* <Header title="Card with Switch" subtitle={<Switch />} /> */}
                    <Row>
                      <Col xs={10} sm={10} md={10} lg={10}>
                        <span className="padding_bottom">Card with Switch</span>
                      </Col>
                      <Col xs={2} sm={2} md={2} lg={2}>
                        <Switch />
                      </Col>
                    </Row>
                  </div>
                  <div className="card_body card_bg_body">{paragraph}</div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <div className="card_body_nomargin card_bg_body_reversed ">
                    {paragraph}
                  </div>
                  <div className="card_header card_bg_grey">
                    <Header title="Card Footer" />
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <div className="card_header card_bg_grey">
                    <Header title="Card with Icon" />
                  </div>
                  <div className="card_body card_bg_body">{paragraph}</div>
                </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default CardConatiner;
