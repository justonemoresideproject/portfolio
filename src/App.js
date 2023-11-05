import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar/Navbar';
import AppRoutes from './AppRoutes';
import Portrait from './Portrait/Portrait'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id='componentContainer'>
          <Navbar />
          <div id='portraitRoutesContainer'>
            <Portrait />
            {/* <div id='portraitContainer'>
              <Portrait />
            </div> */}
            <div id='routesContainer'>
              <AppRoutes />
            </div>
          </div>
        </div>
        {/* <div id='browserRouterWrapper'>
          <Navbar />
          <div id='portraitRoutesContainer'>
            <Portrait />
            <div id='routesContainer'>
              <AppRoutes />
            </div>
          </div>
        </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
