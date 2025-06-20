import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      marginTop: '50px',
      fontFamily: 'sans-serif'
    }}>
      <input
        type="text"
        value={count}
        readOnly
        style={{
          width: '100px',
          textAlign: 'center',
          fontSize: '1.5rem',
          padding: '8px',
        }}
      />
      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: '10px 20px', fontSize: '1rem' }}
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          style={{ padding: '10px 20px', fontSize: '1rem' }}
        >
          –
        </button>
      </div>
    </div>
  );
};

export default Counter;
