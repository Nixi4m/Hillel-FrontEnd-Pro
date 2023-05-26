import React, { useState } from "react";
import Button from "../form/Button";
import "./style.css";

const TodoItem = ({ text, handleRemove, id, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setEditText(event.target.value);
  };

  const handleSaveClick = () => {
    handleEdit(id, editText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="todo-item">
        <input
          type="text"
          value={editText}
          onChange={handleInputChange}
          className="todo-item__edit-input"
        />
        <Button
          text="Save"
          onClick={handleSaveClick}
          customClass="todo-item__save"
        />
      </div>
    );
  }

  return (
    <div className="todo-item">
      <div className="todo-item__description">{editText}</div>
      <Button
        text="Edit"
        onClick={handleEditClick}
        customClass="todo-item__edit"
      />
      <Button
        text="Delete"
        onClick={() => handleRemove(id)}
        customClass="todo-item__delete"
      />
    </div>
  );
};

export default TodoItem;
