import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends React.Component {
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
            data: [6478364, 43434535, 43434535, 32324242, 23243434, 123454544],
            backgroundColor: [
              "blue",
              "grey",
              "pink",
              "lightblue",
              "green",
              "red"
            ]
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="bar_chart">
        <Bar
          height={this.props.height}
          options={{
            scales: {
              xAxes: [
                {
                  display: this.props.xAxes
                }
              ],
              yAxes: [
                {
                  display: this.props.yAxes
                }
              ]
            },
            legend: false,
            maintainAspectRatio: this.props.aspectratio
          }}
          data={this.state.chartData}
        />
      </div>
    );
  }
}

export default BarChart;
