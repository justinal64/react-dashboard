import React from "react";
import ReactDOM from "react-dom";
import AnnotatedMeter from "grommet-addons/components/AnnotatedMeter";

class GaugeChart extends React.Component {
  render() {
    // const label = this.props.sampleData.label;
    // console.log(label);
    const value = this.props.percentTotal;
    const color = this.props.color;
    return (
      <div className="app">
        <AnnotatedMeter
          type="circle"
          units="%"
          max={100}
          series={[{ label: "Total", value: value, colorIndex: color }]}
        />
      </div>
    );
  }
}

export default GaugeChart;
