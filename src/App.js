import logo from './logo.svg';
import './App.css';
import React from 'react';
import ClassFarewell from './ClassFarewell';
import BasicClassComponent from './BasicClassComponent';
import ClassGreeting from './ClassGreeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicClassComponent />
        <ClassGreeting name="Mike" />
        <ClassFarewell />
      </header>
    </div>
  );
}

export default App;
