import logo from './logo.svg';
import React from 'react';
import BasicClassComponents from "./BasicClassComponents";
import ClassGreeting from "./ClassGreeting";
import ClassFarewell from './ClassFarewell';
import './App.css';

function App() {
  return (
    <div >
      <ClassGreeting name='Pursuit 10.4'/>
      <BasicClassComponents />
    <ClassFarewell/>
    </div>
  );
}

export default App;
