import React, { Component } from "react";
import { connect } from "react-redux";
import randomData from "../../actions/random_data";

import Sidebar from "grommet/components/Sidebar";
import Header from "grommet/components/Header";
import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Menu from "grommet/components/Menu";
import Footer from "grommet/components/Footer";
import Title from "grommet/components/Title";

class SideNavigation extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  componentWillMount() {
    this.props.randomData();
  }

  redirect(login) {
    // "login" contains the users email/password
    console.log({ login });
    // logic to test if the user entered value info for email/password
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <Box colorIndex="neutral-1" justify="center" align="center" pad="none">
        <Sidebar colorIndex="neutral-1" fixed={true} size="small">
          <Header pad="medium" justify="between">
            <Title>Dashboard</Title>
          </Header>
          <Box flex="grow" justify="start">
            <Menu primary={true}>
              <Anchor href="#" className="active">
                Server
              </Anchor>
              <Anchor href="#">Email</Anchor>
              <Anchor href="#">Forms</Anchor>
            </Menu>
          </Box>
          <Footer pad="medium" />
        </Sidebar>
      </Box>
    );
  }
}

// connect react with redux
// @params mapStateToProps (necessity)
// @params mapDispatchToProps (optional)
function mapStateToProps(state) {
  return { data: state.randomData };
}

export default connect(mapStateToProps, { randomData })(SideNavigation);
