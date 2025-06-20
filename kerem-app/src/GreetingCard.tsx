import React from 'react';

type GreetingCardProps = {
  name: string;
  message: string;
};


const GreetingCard: React.FC<GreetingCardProps> = ({ name, message }) => {
  return (
    <div style={{ border: '1px solid black',  textAlign: 'center', color: 'blue'}}>
      <h2>Hello {name}! {message}.</h2>
    </div>
  );
};

export default GreetingCard;
