import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar/Navbar';
import AppRoutes from './AppRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
