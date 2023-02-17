import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import React from "react";
import { invertedStackedOPtions } from "./options";

const InvertedStackedBar = () => {
    return (
  <>
  <HighchartsReact 
  highcharts={Highcharts}
  options={invertedStackedOPtions}
  />
  </>
    )
}

export default InvertedStackedBar;