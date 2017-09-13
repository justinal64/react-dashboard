import React from "react";
import ReactDOM from "react-dom";
import Chart, {
  Axis,
  Grid,
  Line,
  Marker,
  MarkerLabel,
  HotSpots,
  Base,
  Layers
} from "grommet/components/chart/Chart";

import Value from "grommet/components/Value";

class LineChart extends React.Component {
  render() {
    // const label = this.props.sampleData.label;
    // console.log(label);
    // const value = this.props.percentTotal;
    // const color = this.props.color;
    return (
      <div className="app">
        <Chart>
          <Axis
            count={5}
            labels={[{ index: 2, label: "50" }, { index: 4, label: "100" }]}
            vertical={true}
          />
          <Chart vertical={true}>
            <MarkerLabel count={12} index={11} label={<Value value={50} />} />
            <Base height="medium" width="medium" />
            <Layers>
              <Grid rows={5} columns={3} />
              <Line
                values={[100, 95, 80, 82, 75, 70, 60, 55, 0, 15, 40, 50]}
                colorIndex="accent-1"
                activeIndex={11}
              />
              <Marker
                colorIndex="graph-2"
                count={12}
                vertical={true}
                index={11}
              />
              <HotSpots count={12} max={100} activeIndex={11} />
            </Layers>
            <Axis
              count={2}
              labels={[
                { index: 0, label: "2012" },
                { index: 1, label: "2015" }
              ]}
            />
          </Chart>
        </Chart>
      </div>
    );
  }
}

export default LineChart;
