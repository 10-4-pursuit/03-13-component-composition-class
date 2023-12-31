import './App.css';
import {ClassFarewell, ClassGreeting, BasicClassComponent} from './ClassFarewell';

function App() {
  return (
    <div className="App">
      <BasicClassComponent/>
      <ClassGreeting name="Kyron"/>
      <ClassFarewell/>
    </div>
  );
}

export default App;
