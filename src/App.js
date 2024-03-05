import './App.css';
import React from 'react';
import ClassGreeting from './components/ClassGreeting'
import ClassFarewell from './components/ClassFarewell';

class App extends React.Component {
  render() {
  return (
    <div>
      <ClassGreeting name="Yah-neen" />
      <ClassFarewell />
    </div>
    );
  }
}

export default App;
