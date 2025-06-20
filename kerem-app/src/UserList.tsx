import React from 'react';

type UserListProps = {
  users: string[];
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
};

export default UserList;
