import React, { Component } from "react";

import SideNavigation from "../../components/Navigation/SideNavigation";
import Header from "../../components/Typography/Header/Header";
import { Row, Col, Grid } from "react-flexbox-grid";
import { getIcon } from "../../components/Helper/Helper";
import DashboardTable from "../../components/Table/DashboardTable";
import Table from "../../components/Table/Table";
import StyledPageUL from "../../components/Pagination/Pagination";

class TablesContainer extends Component {
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
                  <a href="dashboard">Home</a> /{" "}
                  <a href="dashboard">Components</a> / Tables
                </span>
              </div>
              <Row>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <Header
                      title="Simple Table"
                      subtitle={getIcon("align-justify", styles)}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <Table />
                    <div>
                      <StyledPageUL />
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <Header
                      title="Options"
                      subtitle={getIcon("align-justify", styles)}
                    />
                  </div>
                  <div className="card_body card_bg">TablesConatiner</div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <div className="card_header card_bg">
                    <Header
                      title="Options"
                      subtitle={getIcon("align-justify", styles)}
                    />
                  </div>
                  <div className="card_body card_bg">
                    <DashboardTable />
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

// Styling for the icon
const styles = { float: "left", paddingRight: ".5rem" };

export default TablesContainer;
