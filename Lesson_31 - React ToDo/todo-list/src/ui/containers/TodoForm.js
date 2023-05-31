import React from "react";
import '../../main.css';
import Input from "../components/form/Input";
import Button from "../components/form/Button";

const TodoForm = ({ inputValue, onInputChange, onAdd }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Enter a new todo"
      />
      <Button type="submit" text="Add" customClass="todo-form__add" />
    </form>
  );
};

export default TodoForm;
