import React from 'react';
import { useToggle } from './useToggle';

const MonkeyMode: React.FC = () => {
  const [isTraining, toggleMode] = useToggle(true);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontSize: '24px' }}>
      <p>{isTraining ? 'In Training!' : 'Watching Shows...'}</p>
      <button onClick={toggleMode} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '18px' }}>
        Toggle Mode
      </button>
    </div>
  );
};

export default MonkeyMode;
