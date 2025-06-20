import React from 'react';
import './App.css';
import ProductCard from './ProductCard';

function App() {
  return (
     <div className="App" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '20px' }}>
      <ProductCard
        name="smartphone"
        price={1999}
        imageUrl="https://picsum.photos/250/150"
      />
      <ProductCard
        name="T-shirt"
        price={200}
        imageUrl="https://picsum.photos/250/150"
      />
      <ProductCard
        name="pizza"
        price={24}
        imageUrl="https://picsum.photos/250/150"
      />
    </div>
  );
}

export default App;
