// src/App.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './reducers/todoSlice';
import styles from './App.module.css';

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div className={styles.App}>
      <h1>Todo App</h1>
      <div className={styles.formContainer}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className={styles.todoInput}
        />
        <button onClick={handleAddTodo} className={styles.addButton}>
          Add Todo
        </button>
      </div>
      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} className={styles.todoItem}>
            {todo}
          </li>
        ))}
      </ul>
      <footer className={styles.footer}>Total Todos: {todos.length}</footer>
    </div>
  );
}

export default App;
