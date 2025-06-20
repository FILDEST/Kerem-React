import React from 'react';

type SquareProps = {
  value: 'X' | 'O' | null;
  onClick: () => void;
};

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: 80,
        height: 80,
        fontSize: 36,
        fontWeight: 'bold',
        cursor: value ? 'default' : 'pointer',
        backgroundColor: '#f0f0f0',
        border: '1px solid #999',
        outline: 'none',
      }}
      disabled={!!value}
    >
      {value}
    </button>
  );
};

export default Square;
