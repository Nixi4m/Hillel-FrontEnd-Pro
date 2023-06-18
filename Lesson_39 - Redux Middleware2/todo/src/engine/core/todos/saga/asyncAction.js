// Core
import { createAction } from '@reduxjs/toolkit';

export const todosAsyncAction = Object.freeze({
    getTodosAsync: createAction('GET_TODOS_ASYNC'),
    addTodoAsync: createAction('ADD_TODOS_ASYNC')
})
