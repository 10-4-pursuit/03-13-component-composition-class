import ClassGreeting from './ClassGreeting';
import BasicClassComponent from './BasicClassComponent';
import ClassFarewell from './ClassFarewell';
import './App.css';

function App() {
  return (
    <div className="App">

      <ClassGreeting name="Tim" />
      <BasicClassComponent name="Tim" />
      <ClassFarewell name="Tim" />  
      
    </div>
  );
}

export default App;
