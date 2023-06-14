// import React, { useState } from "react";
import '../../main.css';
// Parts
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import { handleAddTodo } from "../../engine/core/todos/thunks";
import { useDispatch } from "react-redux";

function TodoForm() {
    const dispatch = useDispatch();
    const handleAdd = (event) => { dispatch(handleAddTodo(event)) }

    return (
        <form
            className="form"
            onSubmit={handleAdd}
        >
            <Input />
            <Button text="Отправить" />
        </form>
    );
}

export default TodoForm;

