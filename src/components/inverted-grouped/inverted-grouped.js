import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import React from "react";
import { invertedGroupedOptions } from "./options";

const InvertedGroupedBar = () => {
    return (
  <>
  <HighchartsReact 
  highcharts={Highcharts}
  options={invertedGroupedOptions}
  />
  </>
    )
}

export default InvertedGroupedBar;