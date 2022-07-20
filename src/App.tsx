import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Estate from './views/estate';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/estate" element={<Estate/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
