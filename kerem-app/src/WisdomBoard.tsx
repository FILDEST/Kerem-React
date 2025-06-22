import React, { useEffect, useState } from 'react';

const WisdomBoard: React.FC = () => {
  const quotes: string[] = [
    "Yesterday is history, tomorrow is a mystery, but today is a gift.",
    "The secret is... there is no secret!",
    "To make something special, you just have to believe it's special.",
    "There is no charge for awesomeness. Or attractiveness.",
    "Your mind is like this water, my friend. When it is agitated, it becomes difficult to see.",
    "One often meets his destiny on the road he takes to avoid it."
  ];

  const [quote, setQuote] = useState<string>('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div style={{
      border: '2px solid #444',
      padding: '20px',
      margin: '50px auto',
      width: '60%',
      textAlign: 'center',
      fontSize: '20px',
      fontStyle: 'italic',
      backgroundColor: '#f8f8f8',
      borderRadius: '10px'
    }}>
      {quote}
    </div>
  );
};

export default WisdomBoard;
