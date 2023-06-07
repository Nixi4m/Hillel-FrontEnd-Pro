import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo, className }) => {
  return <div className={`${styles.todoItem} ${className}`}>{todo.text}</div>;
};

export default TodoItem;
