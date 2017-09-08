import React from "react";
import ReactDOM from "react-dom";
import AnnotatedMeter from "grommet-addons/components/AnnotatedMeter";

const sampleData = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
  { x: 4, y: 4 },
  { x: 5, y: 5 }
];
class PieChart extends React.Component {
  render() {
    const sampleData = this.props.sampleData;
    const plotOptions = {
      series: {
        pointStart: 2010
      }
    };

    return (
      <div className="app">
        <AnnotatedMeter
          type="circle"
          units="TB"
          max={70}
          series={[
            { label: "First", value: 20, colorIndex: "graph-1" },
            { label: "Second", value: 50, colorIndex: "graph-2" }
          ]}
        />
      </div>
    );
  }
}

export default PieChart;
