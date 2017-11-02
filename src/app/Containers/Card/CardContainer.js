import React, { Component } from "react";
import Header from "../../components/Typography/Header/Header";
import SideNavigation from "../../components/Navigation/SideNavigation";
import { getIcon } from "../../components/Helper/Helper";
import { Row, Col, Grid } from "react-flexbox-grid";
import Switch from "../../components/Switch/Switch";
import StyledLabel from "../../components/Label/Label";
import Card from "../../components/Card/Card";

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
                  <Card paragraph={paragraph} title="Card Title" />
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <Card
                    paragraph={paragraph}
                    title="Card Footer"
                    bottomheader
                  />
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <Card
                    paragraph={paragraph}
                    title="Card with Icon"
                    label={getIcon("check", styles)}
                  />
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <Card
                    paragraph={paragraph}
                    title="Card with Switch"
                    label={<Switch />}
                  />
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <Card
                    paragraph={paragraph}
                    title="Card with Label"
                    label={<StyledLabel color="#79c447" title="Success" />}
                  />
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <Card
                    paragraph={paragraph}
                    title="Card with Label"
                    label={<StyledLabel color="red" title="32" round />}
                  />
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <Card
                    paragraph={paragraph}
                    title="Card Outline Primary"
                    theme="primary"
                  />
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <Card
                    paragraph={paragraph}
                    title="Card Outline Secondary"
                    theme="secondary"
                  />
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <Card
                    paragraph={paragraph}
                    title="Card Outline Success"
                    theme="success"
                  />
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <Card
                    paragraph={paragraph}
                    title="Card Outline Info"
                    theme="info"
                  />
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <Card
                    paragraph={paragraph}
                    title="Card Outline Warning"
                    theme="warning"
                  />
                </Col>
                <Col xs={12} sm={6} md={6} lg={4}>
                  <Card
                    paragraph={paragraph}
                    title="Card Outline Danger"
                    theme="danger"
                  />
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
