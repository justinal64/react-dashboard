import React, { Component } from "react";
import Highcharts from "highcharts";
import { HighchartsChart, Series, XAxis, YAxis } from "react-jsx-highcharts";

require("highcharts/highcharts-more")(Highcharts);
require("highcharts/modules/solid-gauge")(Highcharts);

class GaugeChart extends Component {
  render() {
    const plotOptions = {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true
        }
      }
    };

    const paneOptions = {
      center: ["50%", "85%"],
      size: "140%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          (Highcharts.theme && Highcharts.theme.background2) || "#EEE",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc"
      }
    };

    return (
      <div className="app">
        <HighchartsChart
          chart={{ type: "solidgauge" }}
          plotOptions={plotOptions}
          pane={paneOptions}
        >
          <XAxis />

          <YAxis
            id="myAxis"
            min={0}
            max={200}
            lineWidth={0}
            minorTickInterval={null}
            tickAmount={2}
            labels={{ y: 16 }}
          >
            <Series
              id="gauge-test"
              name="gauge-test"
              data={[80]}
              type="solidgauge"
            />
          </YAxis>
        </HighchartsChart>
      </div>
    );
  }
}

export default GaugeChart;
