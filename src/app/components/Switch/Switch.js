import React, { Component } from "react";
import "./Styles.scss";
class Switch extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <label className="switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" />
        <div className="slider round" />
      </label>
    );
  }
}

export default Switch;
