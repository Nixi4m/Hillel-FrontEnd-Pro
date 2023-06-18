// Core
import {useDispatch, useSelector} from "react-redux";
// Parts
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import TodoForm from "./TodoForm";
// Engine
import { todosSelectors} from "../../engine/core/todos/slice";
import { todosAsyncAction } from "../../engine/core/todos/saga/asyncAction";
import {useEffect} from "react";
import {Footer} from "../components/Footer";

export default function Todo() {
    const items = useSelector(todosSelectors.items);
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(todosAsyncAction.getTodosAsync('test'));
        },
        [dispatch]
    )

    return (
        <div className="container">
            <Header/>
            <TodoForm />
            <div>
                {items.map(item => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        id={item.id}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}
