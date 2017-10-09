import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            pointHitRadius: 25,
            fill: false,
            label: "New Website Traffic",
            data: [12300, 15000, 14000, 17000, 500, 12500],
            backgroundColor: "lightblue"
          },
          {
            pointHitRadius: 25,
            fill: false,
            label: "Old Website Traffic",
            data: [500, 750, 900, 500, 1500, 50],
            backgroundColor: "blue"
          }
        ]
      }
    };
  }
  render() {
    return (
      <div className="line_chart">
        <Line
          height={this.props.height}
          options={{
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
