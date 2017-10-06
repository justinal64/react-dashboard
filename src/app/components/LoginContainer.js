import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
import { connect } from "react-redux";
import randomData from "../../actions/random_data";
import { withRouter } from "react-router-dom";

class LoginContainer extends Component {
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
      <div className="grid2x2">
        <div className="sidebar box">cool graphic</div>
        <div className="barchart box">Login Section</div>
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
