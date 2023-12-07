
import BasicClassComponent from './BasicClassComponent';
import ClassGreeting from './ClassGreeting';

import './App.css';
import ClassFarewell from './ClassFarewell';

function App() {
  return (
    <div className="App">
       <BasicClassComponent />
       <ClassGreeting name="Daniel" age={40}/>
       <ClassFarewell />
    </div>
  );
}

export default App;
