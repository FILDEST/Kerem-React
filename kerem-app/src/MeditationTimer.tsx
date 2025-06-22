import React, { useEffect, useState } from 'react';

const MeditationTimer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const intervalId: NodeJS.Timeout = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ fontSize: '24px', textAlign: 'center', marginTop: '50px' }}>
      {seconds} seconds have passed since you opened the page.
    </div>
  );
};

export default MeditationTimer;
