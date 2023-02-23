import React from 'react';
import './App.css';
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import { invertedBarOptions } from './components/inverted-bar/options';
import { barOptions } from './components/bar/options';
import { invertedStackedOPtions } from './components/inverted-stacked-bar/options';
import { invertedGroupedOptions } from './components/inverted-grouped/options';

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
  <HighchartsReact 
  highcharts={Highcharts}
  options={invertedGroupedOptions}
  />
    </>
  );
}

export default App;
