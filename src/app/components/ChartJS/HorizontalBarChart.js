import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

class HorizontalBarChart extends React.Component {
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
            pointHitRadius: 25,
            fill: false,
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
      <HorizontalBar
        height={100}
        options={{
          scales: {
            xAxes: [
              {
                display: false
              }
            ],
            yAxes: [
              {
                display: false
              }
            ]
          },
          legend: false,
          maintainAspectRatio: this.props.aspectratio
        }}
        data={this.state.chartData}
      />
    );
  }
}

export default HorizontalBarChart;
