import logo from './logo.svg';
import './App.css';
import Token from './components/Token/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <Token tokenNumber={2} text={"One coffee with "} />
      </header>
    </div>
  );
}

export default App;
