import React from 'react';
import './App.css';
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
//import HC_more from "highcharts/highcharts-more";
import { invertedBarOptions } from './components/inverted-bar/options';
import { barOptions } from './components/bar/options';
//HC_more(Highcharts);

Highcharts.setOptions({
  chart: {
     style: {
      fontFamily : "arial"
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
