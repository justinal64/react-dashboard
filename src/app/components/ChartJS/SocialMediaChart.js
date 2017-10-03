import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class SocialMediaChart extends React.Component {
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
            fill: true,
            label: "Population",
            data: [21, 55, 76, 2, 89, 25],
            backgroundColor: "rgba(255, 255, 255, 0.4)"
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

export default SocialMediaChart;
