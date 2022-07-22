import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/home';
import Estate from './views/estate';
import Wiki from './components/wiki';
import Products from './views/products';
import Profiles from './views/profile-shift';
import ProductDetail from './views/product-detail';
import ResponsivePage from './views/responsive-page';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/estate" element={<Estate/>} />
            <Route path="/random" element={<div>
                                      <Wiki />
                                      <Products />
                                      <Profiles />
                                    </div>} />
            <Route path="/oil" element={<ProductDetail/>} />
            <Route path="/reviews" element={<ResponsivePage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
