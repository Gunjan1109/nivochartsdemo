import React from 'react';
import { invertedBarData, barData } from './data';
import './App.css';
import InvertedBar from './components/inverted-bar/InvertedBar';

function App(props) {
  return (
    <>
    <InvertedBar
    />
    {/* <Bar data={barData}/> */}
    </>
  );
}

export default App;
