// Core
import { all, call } from 'redux-saga/effects';
// Engine
import { destinationsWatcher } from '../core/destinations/saga/wathcer';
import { hotelsWatcher } from '../core/hotels/saga/wathcer';

export function* rootSaga() {
  yield all([
    call(destinationsWatcher),
    call(hotelsWatcher),
  ]);
}
