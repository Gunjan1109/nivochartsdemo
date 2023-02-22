import React from 'react';
import { invertedBarData, barData } from './data';
import './App.css';
import InvertedBar from './components/inverted-bar/InvertedBar';
import Bar from './components/bar/bar';
import InvertedStackedBar from './components/inverted-stacked-bar/invertedStackedBar';
import PieChart from './components/pie-chart/piechart';
import InvertedGroupedBar from './components/inverted-grouped/inverted-grouped';
import LineChart from './components/line-chart/line-chart';

function App(props) {
  return (
    <>
    {/* <div style={{width: "600px", height: "500px"}}> */}
    <LineChart
    />  
    {/* </div> */}
    {/* <Bar data={barData}/> */}
    </>
  );
}

export default App;
