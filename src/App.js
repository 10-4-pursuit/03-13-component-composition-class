import logo from './logo.svg';
import './App.css';
import BasicClassComponent from './BasicClassComponent';
import ClassGreeting from './ClassGreeting';
import ClassFarewell from './ClassFarewell';

function App() {
  return (
    <div className="App">
      <BasicClassComponent />
      <ClassGreeting name="Claire" />
      <ClassFarewell />
    </div>
  );
}

export default App;
