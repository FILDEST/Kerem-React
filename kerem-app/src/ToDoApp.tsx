import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

type Task = {
  text: string;
  completed: boolean;
};

const ToDoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index: number) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>🎶 Static And Ben El – To-Do List</h2>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task..."
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={addTask} style={{ padding: '8px 12px' }}>
          ➕
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            text={task.text}
            completed={task.completed}
            onToggle={() => toggleTask(index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
