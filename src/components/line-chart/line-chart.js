import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import React from "react";
import { lineChartOptions } from "./options";

const LineChart = () => {
    return (
  <>
  <HighchartsReact 
  highcharts={Highcharts}
  options={lineChartOptions}
  />
  </>
    )
}

export default LineChart;