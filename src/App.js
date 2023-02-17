import React from 'react';
import { invertedBarData, barData } from './data';
import './App.css';
import InvertedBar from './components/inverted-bar/InvertedBar';
import Bar from './components/bar/bar';
import InvertedStackedBar from './components/inverted-stacked-bar/invertedStackedBar';

function App(props) {
  return (
    <>
    {/* <div style={{width: "600px", height: "500px"}}> */}
    <InvertedStackedBar
    />
    {/* </div> */}
    {/* <Bar data={barData}/> */}
    </>
  );
}

export default App;
