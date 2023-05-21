import React from "react";
import Button from "../form/Button";
import "./style.css";

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            editText: props.text
        };
    }

    handleEditClick = () => {
        this.setState({ isEditing: true });
    }

    handleInputChange = (event) => {
        this.setState({ editText: event.target.value });
    }

    handleSaveClick = () => {
        const { editText } = this.state;
        const { id, handleEdit } = this.props;
        handleEdit(id, editText);
        this.setState({ isEditing: false });
    }

    render() {
        const { isEditing, editText } = this.state;
        const { handleRemove, id } = this.props;

        if (isEditing) {
            return (
                <div className="todo-item">
                    <input
                        type="text"
                        value={editText}
                        onChange={this.handleInputChange}
                        className="todo-item__edit-input"
                    />
                    <Button
                        text="Save"
                        onClick={this.handleSaveClick}
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
                    onClick={this.handleEditClick}
                    customClass="todo-item__edit"
                />
                <Button
                    text="Delete"
                    onClick={() => handleRemove(id)}
                    customClass="todo-item__delete"
                />
            </div>
        );
    }
}
