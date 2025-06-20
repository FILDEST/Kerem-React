import React from 'react';

type ToDoItemProps = {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

const ToDoItem: React.FC<ToDoItemProps> = ({ text, completed, onToggle, onDelete }) => {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 0',
        borderBottom: '1px solid #eee',
      }}
    >
      <span
        onClick={onToggle}
        style={{
          cursor: 'pointer',
          textDecoration: completed ? 'line-through' : 'none',
          flex: 1,
        }}
      >
        {completed ? '✅' : '⬜'} {text}
      </span>
      <button onClick={onDelete} style={{ marginLeft: '12px', cursor: 'pointer' }}>
        🗑️
      </button>
    </li>
  );
};

export default ToDoItem;
