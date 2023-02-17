import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import React from "react";
import { pieChartOptions } from "./options";

const PieChart = () => {
    return (
  <>
  <HighchartsReact 
  highcharts={Highcharts}
  options={pieChartOptions}
  />
  </>
    )
}

export default PieChart;