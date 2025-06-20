import React, { useState } from 'react';

const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', 'C', '+',
  '='
];

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');

  const handleClick = (value: string) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        // eslint-disable-next-line no-eval
        const result = eval(input);
        setInput(result.toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(prev => prev + value);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f4f4f4',
      padding: '16px',
      boxSizing: 'border-box',
      width: '100vw',
      direction: 'ltr'
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        width: '100%',
        maxWidth: '320px',
        boxSizing: 'border-box',
      }}>
        <input
          type="text"
          value={input}
          readOnly
          style={{
            width: '100%',
            height: '50px',
            fontSize: '1.5rem',
            textAlign: 'right',
            marginBottom: '12px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            backgroundColor: '#f9f9f9',
            boxSizing: 'border-box'
          }}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px'
        }}>
          {buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => handleClick(btn)}
              style={{
                padding: '20px',
                fontSize: '1.2rem',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: ['/', '*', '-', '+', '='].includes(btn) ? '#ff9500' : '#e0e0e0',
                color: ['/', '*', '-', '+', '='].includes(btn) ? 'white' : 'black',
                cursor: 'pointer'
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
