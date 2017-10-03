import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class SimpleLineChart extends React.Component {
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
            data: [27, 41, 29, 76, 45, 12],
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
      <div className="chart">
        <Line
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
            maintainAspectRatio: false
          }}
          data={this.state.chartData}
        />
      </div>
    );
  }
}

export default SimpleLineChart;
