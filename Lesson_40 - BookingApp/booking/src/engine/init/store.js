// Core
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
// Engine
import destinations from '../core/destinations/slice';
import { rootSaga } from './rootSaga';

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer,
} = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    router: routerReducer,
    destinations,
    // hotels
  },
  middleware: () => [sagaMiddleware, routerMiddleware],
});

export const history = createReduxHistory(store);

sagaMiddleware.run(rootSaga);
