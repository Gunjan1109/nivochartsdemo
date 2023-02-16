import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import React from "react";
import { invertedBarOptions } from "./options";

const InvertedBar = () => {
    return (
  <>
  <HighchartsReact 
  highcharts={Highcharts}
  options={invertedBarOptions}
  />
  </>
    )
}

export default InvertedBar;