import React, { useState } from 'react';
import './TodoApp.css';  // Optional: for styling

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTodo = () => {
    if (task.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-app">
      <h2>Vanilla To-Do List</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.length === 0 && <p>No tasks yet!</p>}
        {todos.map(({ id, text, completed }) => (
          <li key={id} className={completed ? 'completed' : ''}>
            <span onClick={() => toggleComplete(id)}>{text}</span>
            <button onClick={() => deleteTodo(id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
