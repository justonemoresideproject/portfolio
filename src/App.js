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
      <div id='browserRouterWrapper'>
        <Navbar />
        <div id='portraitRoutesContainer'>
          <Portrait />
          <AppRoutes />
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
