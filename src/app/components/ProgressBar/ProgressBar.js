import React, { Component } from "react";
import {
  ProgressBarHeader,
  ProgressBarSubheader,
  ProgressBarColor
} from "./Styles";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div className="chart">
        <div className="center-align">
          <ProgressBarHeader>{this.props.header}</ProgressBarHeader>
          <ProgressBarSubheader>{this.props.subheader}</ProgressBarSubheader>
        </div>
        <ProgressBarColor
          max="100"
          value={this.props.value}
          backgroundColor={this.props.backgroundColor}
        />
      </div>
    );
  }
}

export default ProgressBar;
