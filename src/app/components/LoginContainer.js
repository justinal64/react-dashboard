import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
import { connect } from "react-redux";
import randomData from "../../actions/random_data";
import LoginCard from "./LoginCard";
import PasswordInput from "grommet/components/PasswordInput";

import Split from "grommet/components/Split";
import Sidebar from "grommet/components/Sidebar";
import LoginForm from "grommet/components/LoginForm";
import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Heading from "grommet/components/Heading";
import Paragraph from "grommet/components/Paragraph";
import Footer from "grommet/components/Footer";

import Logo from "grommet/components/icons/Grommet";

class LoginContainer extends Component {
  componentWillMount() {
    this.props.randomData();
  }

  render() {
    return (
      <Split flex="left" separator={true}>
        <Article>
          <Section
            full={true}
            colorIndex="brand"
            pad="large"
            justify="center"
            align="center"
          >
            <Heading tag="h1" strong={true}>
              Test
            </Heading>
            <Paragraph align="center" size="large">
              Development with Grommet is cool.
            </Paragraph>
          </Section>
        </Article>

        <Sidebar justify="between" align="center" pad="none" size="large">
          <span />
          <LoginForm onSubmit={this.test} />
          <Footer
            direction="row"
            size="small"
            pad={{ horizontal: "medium", vertical: "small" }}
          >
            <span className="secondary">&copy; 2017 Grommet Labs</span>
          </Footer>
        </Sidebar>
      </Split>
    );
  }
}

// connect react with redux
// @params mapStateToProps (necessity)
// @params mapDispatchToProps (optional)
function mapStateToProps(state) {
  return { data: state.randomData };
}

export default connect(mapStateToProps, { randomData })(LoginContainer);
