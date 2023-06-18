// Core
import { all, call } from 'redux-saga/effects'
// Engine
import {todosWatcher} from "../core/todos/saga/watcher";
export function* rootSaga() {
    yield all([
        call(todosWatcher),
        // call(counterWatcher),
        // call(swapiWatcher),
    ])
}