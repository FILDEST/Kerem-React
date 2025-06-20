import React from 'react';
import './App.css';
import UserList from './UserList';

function App() {
    const userNames = ["Omer", "Kerem", "Ali", "Fatma", "Mehmet"];

  return (
   <div>
      <h1>Users List</h1>
      <UserList users={userNames} />
    </div>

  );
}

export default App;
