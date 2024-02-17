import React from 'react';
import BasicClassComponent from './BasicClassComponent';
import ClassGreeting from './ClassGreeting';
import ClassFarewell from './ClassFarewell';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Component Composition with class Components</h1>
      <ClassGreeting name="Kanique" />
      <BasicClassComponent />
      <ClassFarewell />
    </div>
  );
}

export default App;
