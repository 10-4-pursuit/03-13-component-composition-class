import React from 'react';
import ClassFarewell from './ClassFarewell';
import ClassGreeting from './ClassGreeting';
import BasicClassComponent from './BasicClassComponent';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <BasicClassComponent />
      <ClassGreeting name="Bri"/>
      <ClassFarewell />
    </div>
  )
}
export default App;
