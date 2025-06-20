import React from 'react';

type ProductCardProps = {
  name: string;
  price: number;
  imageUrl: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '250px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <img
        src={imageUrl}
        alt={name}
        style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
      />
      <h2 style={{ fontSize: '1.2rem', margin: '12px 0 4px' }}>{name}</h2>
      <p style={{ fontWeight: 'bold', color: '#333' }}>{price} ₪</p>
    </div>
  );
};

export default ProductCard;
