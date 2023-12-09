import React from 'react';
import ClassFarwell from './ClassFarewell';
import BasicClassComponent from './BasicClassComponent';
import ClassGreeting from './ClassGreeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <BasicClassComponent />
      <ClassGreeting name="Yusuke"/>
      <ClassFarwell />
    </div>
  );
}

export default App;
