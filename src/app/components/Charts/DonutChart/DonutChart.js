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
class DonutChart extends React.Component {
  render() {
    const sampleData = this.props.sampleData;
    const plotOptions = {
      series: {
        pointStart: 2010
      }
    };

    return (
      //   <div>
      //     <VictoryPie padAngle={3} innerRadius={100} data={sampleData} />
      //   </div>
      <svg width={300} height={300}>
        <circle cx={150} cy={150} r={50} fill="#c43a31" />
        <VictoryPie
          standalone={false}
          width={300}
          height={300}
          innerRadius={75}
          data={sampleData}
        />
      </svg>
    );
  }
}

export default DonutChart;
