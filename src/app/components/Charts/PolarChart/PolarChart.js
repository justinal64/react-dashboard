import React from "react";
import ReactDOM from "react-dom";
import {
  VictoryPolarAxis,
  VictoryChart,
  VictoryTheme,
  VictoryBar
} from "victory";

const sampleData = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
  { x: 4, y: 4 },
  { x: 5, y: 5 }
];
class PolarChart extends React.Component {
  render() {
    const sampleData = this.props.sampleData;
    const plotOptions = {
      series: {
        pointStart: 2010
      }
    };

    return (
      <div>
        {/* <VictoryChart
          polar
          theme={VictoryTheme.material}
          startAngle={90}
          endAngle={450}
        >
          <VictoryPolarAxis
            tickValues={[0, 45, 90, 135, 180, 225, 270, 315]}
            labelPlacement="vertical"
          />
          <VictoryBar
            style={{ data: { fill: "tomato", width: 30 } }}
            data={[
              { x: 0, y: 2 },
              { x: 60, y: 3 },
              { x: 120, y: 5 },
              { x: 180, y: 4 },
              { x: 240, y: 4 },
              { x: 300, y: 4 }
            ]}
          />
        </VictoryChart> */}

        <VictoryChart
          polar
          theme={VictoryTheme.material}
          startAngle={0}
          endAngle={180}
        >
          <VictoryPolarAxis
            tickValues={[0, 45, 90, 135, 180]}
            labelPlacement="vertical"
          />
          <VictoryBar
            style={{ data: { fill: "tomato", width: 30 } }}
            data={[
              { x: 0, y: 2 },
              { x: 45, y: 3 },
              { x: 90, y: 5 },
              { x: 135, y: 4 },
              { x: 180, y: 7 }
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
}

export default PolarChart;
