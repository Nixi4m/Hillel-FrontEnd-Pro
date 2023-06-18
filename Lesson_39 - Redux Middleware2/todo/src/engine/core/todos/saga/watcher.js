// Core
import { takeEvery } from 'redux-saga/effects';
// Engine
import {todosAsyncAction} from "./asyncAction";
// Workers
import {callGetTodosWorker} from "./workers/getTodos";
import {callAddTodoWorker} from "./workers/addTodo";
export function* todosWatcher() {
    yield takeEvery(todosAsyncAction.getTodosAsync.type, callGetTodosWorker);
    yield takeEvery(todosAsyncAction.addTodoAsync.type, callAddTodoWorker);
}