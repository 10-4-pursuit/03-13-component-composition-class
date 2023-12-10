import logo from './logo.svg';
import './App.css';
import BasicClassComponent from './BasicClassComponent';
import ClassGreeting from './ClassGreeting';
import ClassFarewell from './ClassFarewell';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BasicClassComponent />
        <ClassGreeting name="Pursuit Cohort 10.4"/>
        <ClassFarewell name="Pursuit Cohort 10.4"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
