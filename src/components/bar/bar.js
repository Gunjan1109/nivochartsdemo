import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import React from "react";
import { barOptions } from "./options";

const Bar = () => {
    return (
  <>
  <HighchartsReact 
  highcharts={Highcharts}
  options={barOptions}
  />
  </>
    )
}

export default Bar;