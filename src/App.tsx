import React from 'react';
import Wiki from './components/wiki';
import Products from './views/products';
import Profiles from './views/profile-shift';
import ProductDetail from './views/product-detail';
import ResponsivePage from './views/responsive-page';

function App() {
  return (
    <div className="App">
      <Wiki />
      <Products />
      <Profiles />
      <ProductDetail />
      <ResponsivePage />
    </div>
  );
}

export default App;
