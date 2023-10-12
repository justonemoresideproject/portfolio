import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='titleContainer'>
        <h1>
          Austin Ellis
        </h1>
        <h3>
          Software Engineer
        </h3>
        <div>
          Committed, focused and motivated software engineer always on the lookout for more knowledge and unique challenges.
        </div>
      </div>
      <Projects />
    </div>
  );
}

export default App;
