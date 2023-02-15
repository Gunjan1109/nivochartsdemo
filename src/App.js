import React from 'react';
import { categoriesData, volumeData } from './data';
import './App.css';
import InvertedBar from './components/inverted-bar';
import Bar from './components/bar';

function App(props) {
  return (
    <>
    <InvertedBar
      data={categoriesData}
    />
    {/* <Bar data={volumeData}/> */}
    </>
  );
}

export default App;
