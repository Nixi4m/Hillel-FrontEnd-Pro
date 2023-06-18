// Core
import { put, call } from 'redux-saga/effects';
// Engine
import {todosActions} from "../../slice";

export function* callGetTodosWorker(action) {
    console.log(action);
    const response = yield call(() => {
        return JSON.parse(localStorage.getItem('items')) || [];
    })
    yield put(todosActions.addItems(response));
}