import React, { useEffect } from 'react';
import './App.css';
import HighchartsReact from "highcharts-react-official";
import HighchartsStock from 'highcharts/highstock';
import Highcharts from 'highcharts';
import { invertedBarOptions } from './components/inverted-bar/options';
import { barOptions } from './components/bar/options';
import { invertedStackedOPtions } from './components/inverted-stacked-bar/options';
import { invertedGroupedOptions } from './components/inverted-grouped/options';
import { pieChartOptions } from './components/pie-chart/options';
import { highstockOptions } from './components/highstock/highstockoptions';
import { splineChartOptions } from './components/spline/options';
import { mapOptions } from "./components/maps/options";
import { wordCloudOptions } from './components/wordCloud/options';

import wordCloud from "highcharts/modules/wordcloud";
import { lineWithColumnOptions } from './components/line-with-column/options';
import { lineChartOptions } from './components/line-chart/options';

// wordCloud(Highcharts)

Highcharts.setOptions({
  chart: {
     style: {
      fontFamily : "helvetica",
     }
  }
});

function App(props) {
  return (
    <>
<div className='container'>
  <HighchartsReact 
  highcharts={Highcharts}
  options={lineWithColumnOptions}
  />
  </div>
    </>
  );
}

export default App;
