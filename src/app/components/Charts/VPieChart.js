import React from "react";
import ReactDOM from "react-dom";
import { VictoryPie, VictoryChart, VictoryTheme } from "victory";

const sampleData = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
  { x: 4, y: 4 },
  { x: 5, y: 5 }
];

class VPieChart extends React.Component {
  render() {
    const plotOptions = {
      series: {
        pointStart: 2010
      }
    };

    return (
      <div className="app">
        <VictoryPie
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          data={sampleData}
        />
      </div>
    );
  }
}

export default VPieChart;
