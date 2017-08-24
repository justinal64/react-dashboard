import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
import { connect } from "react-redux";
import randomData from "../../actions/random_data";
import LoginCard from "./LoginCard";
import LoginForm from "grommet/components/LoginForm";

class LoginContainer extends Component {
  componentWillMount() {
    this.props.randomData();
  }

  render() {
    return (
      <div>
        <LoginForm />
        <LoginCard data={this.props.data} />
        <button onClick={this.props.randomData}>Update randomData</button>
      </div>
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
