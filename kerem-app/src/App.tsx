import React from 'react';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
       <div>
      <CustomButton label="Confirm" color="green" />
      <CustomButton label="Cancel" color="red" />
    </div>
  );
}

export default App;
