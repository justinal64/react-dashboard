import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ],
        datasets: [
          {
            label: "Population",
            data: [6478364, 433333434, 43434535, 32324242, 23243434, 123454544],
            backgroundColor: [
              "green",
              "red",
              "pink",
              "blue",
              "orange",
              "lightblue"
            ]
          }
        ]
      }
    };
  }
  render() {
    return (
      <Pie
        height={this.props.height}
        data={this.state.chartData}
        options={{
          maintainAspectRatio: this.props.aspectratio
        }}
      />
    );
  }
}

export default PieChart;
