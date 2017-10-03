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
            data: [6478364, 433333434, 43434535, 32324242, 23243434, 123454544],
            backgroundColor: "transparent"
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
