import ClassFarewell from './ClassFarewell';
import ClassGreeting from './ClassGreeting';
import BasicClassComponet from './BasicClassComponet';
import './App.css';

function App() {
  return (
    <div className="App">
    <ClassFarewell name="John"/>
    <ClassGreeting name="Jane"/>
    <BasicClassComponet name="Joe"/>
    </div>
  );
}

export default App;
