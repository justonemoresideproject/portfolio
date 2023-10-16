import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='titleContainer'>
        <div className='nameTitle'>
          Austin Ellis
        </div>
        <div className='jobTitle'>
          Software Engineer
        </div>
        <div className='jobDescription'>
          Committed, focused and motivated software engineer always on the lookout for more knowledge and unique challenges.
        </div>
      </div>
      {/* <div className='divider'>
      </div> */}
      <Projects />
    </div>
  );
}

export default App;
