import ClassGreeting  from './ClassGreeting';
import BasicClassComponent from './BasicClassComponent';
import ClassFarewell from './ClassFarewell';
import './App.css';

function App() {
  const element = <ClassGreeting name="Jack Reacher" />
  return (
    <div>
<BasicClassComponent />
   {element}
   <ClassFarewell />
    </div>
  );
}

export default App;
