// Core
import { takeEvery } from 'redux-saga/effects';
// Parts
import { callGetHotelsWorker } from './workers/callGetHotelsWorker';
import { hotelsAsyncActions } from './asyncActions';

export function* hotelsWatcher() {
  yield takeEvery(hotelsAsyncActions.getHotelsAsync.type, callGetHotelsWorker);
}
