import React, { useEffect, useState } from "react";
import '../../main.css';
import TodoItem from "../components/TodoItem/TodoItem";
import TodoForm from "../containers/TodoForm";

const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const handleAdd = (event) => {
    event.preventDefault();
    const input = event.target.getElementsByClassName('form__input')[0];
    const text = input.value;
    const newItems = [
      ...items,
      { id: Math.random(), text }
    ];
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
    input.value = '';
  }

  const handleRemove = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  }

  const handleEdit = (id, newText) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, text: newText };
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  }

  return (
    <div className="container">
      <TodoForm handleAdd={handleAdd} />
      <div>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            text={item.text}
            id={item.id}
            handleEdit={handleEdit}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
