import React from "react";
import ReactDOM from "react-dom";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

class BarChart extends React.Component {
  render() {
    const data = this.props.sampleData;
    const plotOptions = {
      series: {
        pointStart: 2010
      }
    };
    return (
      <div className="app">
        <VictoryChart
          // adding the material theme provided with Victory
          theme={VictoryTheme.material}
          // domainPadding will add space to each side of VictoryBar to
          // prevent it from overlapping the axis
          domainPadding={20}
        >
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={x => `$${x / 1000}k`}
          />
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </div>
    );
  }
}

export default BarChart;
