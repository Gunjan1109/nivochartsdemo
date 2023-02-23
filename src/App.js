import React from 'react';
import './App.css';
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import { invertedBarOptions } from './components/inverted-bar/options';
import { barOptions } from './components/bar/options';

Highcharts.setOptions({
  chart: {
     style: {
      fontFamily : "serif"
     }
  }
});

function App(props) {
  return (
    <>
  <HighchartsReact 
  highcharts={Highcharts}
  options={barOptions}
  />
    </>
  );
}

export default App;
