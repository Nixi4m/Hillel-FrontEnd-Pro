import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
// Engine
import todosReducer from '../core/todos/slice';
import { delay } from './middlewares';
import {rootSaga} from "./rootSaga";

export const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    middleware: [
        delay,
        thunk,
        sagaMiddleware
    ]
})
sagaMiddleware.run(
    rootSaga
)