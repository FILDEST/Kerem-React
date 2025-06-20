import React from 'react';
import './App.css';
import GreetingCard from './GreetingCard';

function App() {
  return (
   <div>
      <GreetingCard name="Yosi" message="Welcome" />
       <GreetingCard name="Yoni" message="Welcome" />
    </div>
  );
}

export default App;
