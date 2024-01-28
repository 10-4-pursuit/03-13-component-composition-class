import React from 'react';
import BasicClassComponent from './BasicClassComponent';
import ClassGreeting from './ClassGreeting';
import ClassFarewell from './ClassFarewell';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <BasicClassComponent />
      <ClassGreeting name="Mikals" />
      <ClassFarewell />
     
    </div>
  );
}


export default App;
