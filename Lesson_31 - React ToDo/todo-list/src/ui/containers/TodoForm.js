import React from "react";
import '../../main.css';
import Input from "../components/form/Input";
import Button from "../components/form/Button";

const TodoForm = ({ handleAdd }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(event);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input />
      <Button text="Send" />
    </form>
  );
};

export default TodoForm;

