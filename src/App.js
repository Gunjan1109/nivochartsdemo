import React from 'react';
import { invertedBarData, barData } from './data';
import './App.css';
import InvertedBar from './components/inverted-bar/InvertedBar';
import Bar from './components/bar/bar';

function App(props) {
  return (
    <>
    <Bar
    />
    {/* <Bar data={barData}/> */}
    </>
  );
}

export default App;
