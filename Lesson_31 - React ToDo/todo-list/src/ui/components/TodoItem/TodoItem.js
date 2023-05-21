import React from "react";
import Button from "../form/Button";
import "./style.css";

export default class TodoItem extends React.Component {
    render() {
        const { text, handleRemove, id } = this.props;
        const onClick = () => {
            handleRemove(id);
        }
        return (
            <div className="todo-item">
                <div className="todo-item__description">{text}</div>
                <Button
                    text="Удалить"
                    onClick={onClick}
                    customClass="todo-item__delete"
                />
            </div>
        )
    }
}
