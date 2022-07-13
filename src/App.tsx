import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Wiki from './components/wiki';
import Products from './views/products';
import Profiles from './views/profile-shift';
import ProductDetail from './views/product-detail';
import ResponsivePage from './views/responsive-page';
import Estate from './views/estate';

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px'}}>
        <Wiki />
        <Products />
        <Profiles />
        <ProductDetail />
        <ResponsivePage />
        <Estate />
      </div>
    </Router>
  );
}

export default App;
