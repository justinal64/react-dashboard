import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends React.Component {
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
      <div className="chart">
        Bar Component
        <Line
          options={{
            title: {
              display: true,
              text: "Test",
              fontSize: 25
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                    scaleShowLabels: false
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false
                  }
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

export default LineChart;
