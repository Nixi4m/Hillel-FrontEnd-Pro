import React, { useState, useEffect } from 'react';
import '../../main.css';
import TodoItem from '../components/TodoItem/TodoItem';
import { Form, Field } from 'react-final-form';
import styles from '../containers/TodoForm.module.css';
import Input from '../components/form/Input';
import Button from '../components/form/Button';

const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const handleAdd = (values) => {
    const { inputValue } = values;
    if (inputValue.trim() === '') {
      return;
    }
    const newItems = [
      ...items,
      { id: Math.random(), text: inputValue }
    ];
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
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
      <Form onSubmit={handleAdd}>
        {({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <Field name="inputValue">
              {({ input, meta }) => (
                <div className={styles.input_box}>
                  <Input
                    type="text"
                    {...input}
                    placeholder="Enter a new todo"
                    className={styles.input}
                  />
                  {meta.error && meta.touched && (
                    <span className={styles.error}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Button type="submit" text="Add" customClass={styles.addButton} />
          </form>
        )}
      </Form>
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
