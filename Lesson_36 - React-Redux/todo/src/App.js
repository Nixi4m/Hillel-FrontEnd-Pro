import React, { useState } from 'react';
import TodoItem from './TodoItem';
import styles from './App.module.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (text.trim() === '') return;
    const newTodo = {
      id: new Date().getTime(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setText('');
  };

  return (
    <div className={styles.app}>
      <h1>Todo App</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={event => setText(event.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Add</button>
      </form>
      <div className={styles.todoList}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            className={todo.completed ? styles.completed : ''}
          />
        ))}
      </div>
      <footer className={styles.footer}>Total Todos: {todos.length}</footer>
    </div>
  );
};

export default App;
