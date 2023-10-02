import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      <Navbar />
      <div className='titleContainer'>
        <h1>
          Austin Ellis
        </h1>
        <h3>
          Software Engineer
        </h3>
      </div>
      <Projects />
    </div>
  );
}

export default App;
