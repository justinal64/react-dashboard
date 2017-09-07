import React, { Component } from "react";
import DashboardCard from "./DashboardCard";
import LineSeriesChart from "./Charts/LineSeriesChart";
import GaugeChart from "./Charts/GaugeChart";
import CombinationChart from "./Charts/CombinationChart";
import VBarChart from "./Charts/VBarChart";
import VPieChart from "./Charts/VPieChart";

import { connect } from "react-redux";
import fetchData from "../../actions/fetch_data";
import Split from "grommet/components/Split";
import Sidebar from "grommet/components/Sidebar";
import LoginForm from "grommet/components/LoginForm";
import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Heading from "grommet/components/Heading";
import Paragraph from "grommet/components/Paragraph";
import Footer from "grommet/components/Footer";
import Header from "grommet/components/Header";
import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Title from "grommet/components/Title";
import Menu from "grommet/components/Menu";
import Button from "grommet/components/Button";
import Columns from "grommet/components/Columns";
import Headline from "grommet/components/Headline";
import Tiles from "grommet/components/Tiles";
import Tile from "grommet/components/Tile";
import Card from "grommet/components/Card";

class DashboardContainer extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  componentDidMount() {
    setInterval(this.props.fetchData.bind(this), 100000); // 300000 = 5 minutes
  }
  render() {
    return (
      <Split flex="right">
        <Box colorIndex="neutral-1" justify="center" align="center" pad="none">
          <Sidebar colorIndex="neutral-1" fixed={true} size="small">
            <Header pad="medium" justify="between">
              <Title>Dashboard</Title>
            </Header>
            <Box flex="grow" justify="start">
              <Menu primary={true}>
                <Anchor href="#" className="active">
                  First
                </Anchor>
                <Anchor href="#">Second</Anchor>
                <Anchor href="#">Third</Anchor>
              </Menu>
            </Box>
            <Footer pad="medium" />
          </Sidebar>
        </Box>
        <Section colorIndex="grey-1">
          <Headline align="center">Overview</Headline>
          <Box
            className="stacked-row"
            direction="row"
            pad={{ vertical: "medium" }}
          >
            <Box
              className="meter-box col__span-25"
              justify="start"
              pad={{ horizontal: "medium" }}
              align="center"
            >
              <VPieChart />
              <Heading align="center" tag="h2">
                Tickets Per Hour
              </Heading>
            </Box>
            <Box
              className="area-box col__span-25"
              justify="start"
              pad={{ horizontal: "medium" }}
              align="center"
            >
              <VPieChart />
              <Heading align="center" tag="h2">
                Sample Heading
              </Heading>
            </Box>
            <Box
              className="meter-box col__span-25"
              justify="start"
              pad={{ horizontal: "medium" }}
              align="center"
            >
              <VPieChart />
              <Heading align="center" tag="h2">
                Sample Heading
              </Heading>
            </Box>
          </Box>
          <CombinationChart />
          <VBarChart />
          <VPieChart />
        </Section>
      </Split>
    );
  }
}

// connect react with redux
// @params mapStateToProps (necessity)
// @params mapDispatchToProps (optional)
function mapStateToProps(state) {
  return { astronomy: state.astronomy };
}

export default connect(mapStateToProps, { fetchData })(DashboardContainer);
