import React, { useState, useEffect } from 'react';
import '../../main.css';
import TodoItem from '../components/TodoItem/TodoItem';
import TodoForm from '../containers/TodoForm';

const Main = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    if (inputValue.trim() === '') {
      return;
    }
    const newItems = [
      ...items,
      { id: Math.random(), text: inputValue }
    ];
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
    setInputValue('');
  };

  const handleRemove = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  const handleEdit = (id, newText) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, text: newText };
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  return (
    <div className="container">
      <TodoForm
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onAdd={handleAdd}
      />
      <div>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            id={item.id}
            onEdit={handleEdit}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
