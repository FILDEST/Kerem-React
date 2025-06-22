import React, { useEffect, useState } from 'react';

const SchnitzelButton: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<number>(Date.now());
  const [lastClickTime, setLastClickTime] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    if (lastClickTime === null || currentTime - lastClickTime >= 6000) {
      setMessage('You got a schnitzel!');
      setLastClickTime(currentTime);
    } else {
      setMessage('Wait 3 seconds between clicks!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleClick} style={{ fontSize: '18px', padding: '10px 20px' }}>
        I want schnitzel
      </button>
      <p style={{ marginTop: '20px', fontSize: '20px' }}>{message}</p>
    </div>
  );
};

export default SchnitzelButton;
