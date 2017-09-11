import React, { Component } from "react";
import { connect } from "react-redux";
import randomData from "../../actions/random_data";

import Header from "grommet/components/Header";
import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Menu from "grommet/components/Menu";
import Title from "grommet/components/Title";
// import Actions from "grommet/components/Actions";
import Search from "grommet/components/Search";

class TopNavigation extends Component {
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
      <Header>
        <Title>Sample Title</Title>
        <Box flex={true} justify="end" direction="row" responsive={false}>
          <Search
            inline={true}
            fill={true}
            size="medium"
            placeHolder="Search"
            dropAlign={{ right: "right" }}
          />
          <Menu icon={<Actions />} dropAlign={{ right: "right" }}>
            <Anchor href="#" className="active">
              First
            </Anchor>
            <Anchor href="#">Second</Anchor>
            <Anchor href="#">Third</Anchor>
          </Menu>
        </Box>
      </Header>
    );
  }
}

// connect react with redux
// @params mapStateToProps (necessity)
// @params mapDispatchToProps (optional)
function mapStateToProps(state) {
  return { data: state.randomData };
}

export default connect(mapStateToProps, { randomData })(TopNavigation);
