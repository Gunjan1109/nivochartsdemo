import React from 'react';
import { invertedBarData, barData } from './data';
import './App.css';
import InvertedBar from './components/inverted-bar';
import Bar from './components/bar';

function App(props) {
  return (
    <>
    <InvertedBar
      data={invertedBarData}
    />
    {/* <Bar data={barData}/> */}
    </>
  );
}

export default App;
