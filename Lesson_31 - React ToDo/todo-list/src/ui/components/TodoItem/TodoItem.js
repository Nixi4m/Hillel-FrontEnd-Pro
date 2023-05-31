import React, { useState } from "react";
import Button from "../form/Button";
import "./style.css";

const TodoItem = ({ id, text, onEdit, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleSaveClick = () => {
    onEdit(id, editedText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="todo-item">
        <input
          type="text"
          value={editedText} 
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
      <div className="todo-item__description">{editedText}</div>
      <Button
        text="Edit"
        onClick={handleEditClick}
        customClass="todo-item__edit"
      />
      <Button
        text="Delete"
        onClick={() => onRemove(id)}
        customClass="todo-item__delete"
      />
    </div>
  );
};

export default TodoItem;
