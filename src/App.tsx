import React from 'react';
import Wiki from './components/wiki';
import Products from './views/products';
import Profiles from './views/profile-shift';
import ProductDetail from './views/product-detail';

function App() {
  return (
    <div className="App">
      <Wiki />
      <Products />
      <Profiles />
      <ProductDetail />
    </div>
  );
}

export default App;
