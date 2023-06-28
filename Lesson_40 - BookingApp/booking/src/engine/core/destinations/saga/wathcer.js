// Core
import { takeEvery } from 'redux-saga/effects';
// Parts
import { callGetDestinationWorker } from './workers/callGetDestinationWorker';
import { destinationsAsyncActions } from './asyncActions';

export function* destinationsWatcher() {
  yield takeEvery(destinationsAsyncActions.getDestinationsAsync.type, callGetDestinationWorker);
}
