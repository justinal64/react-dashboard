import React, { Component } from "react";
// import "./Styles.scss";
import SideNavigation from "../../components/Navigation/SideNavigation";
import Button from "../../components/Button/Button";

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
                <Col xs={12} sm={6} md={6} lg={6} className="grid">
                  <Button
                    icon="user"
                    title="Primary"
                    backgroundColor="#20a8d8"
                    color="white"
                    font={1}
                    lineHeight={2}
                    borderColor="#20a8d8"
                  />
                  <Button
                    title="Secondary"
                    backgroundColor="#c0cadd"
                    color="white"
                    font={1}
                    lineHeight={2}
                    borderColor="#c0cadd"
                  />
                  <Button
                    title="Success"
                    backgroundColor="#79c447"
                    color="white"
                    font={1}
                    lineHeight={2}
                    borderColor="#79c447"
                  />
                  <Button
                    title="Warning"
                    backgroundColor="#fabb3d"
                    color="white"
                    font={1}
                    lineHeight={2}
                    borderColor="#fabb3d"
                  />
                  <Button
                    title="Danger"
                    backgroundColor="#ff5454"
                    color="white"
                    font={1}
                    lineHeight={2}
                    borderColor="#ff5454"
                  />
                </Col>
                <Col xs={12} sm={6} md={6} lg={6} className="grid">
                  Col
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
