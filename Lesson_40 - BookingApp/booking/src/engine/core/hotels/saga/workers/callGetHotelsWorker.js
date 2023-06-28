// Core
import { put, delay } from 'redux-saga/effects';
import { push } from 'redux-first-history';
// Engine
import { links } from '../../../../config/routers';

export function* callGetHotelsWorker(actions) {
  try {
    console.log(actions.payload);
    yield delay(2000);
    yield put(push(links.hotels));
  } catch (e) {
    console.warn(e);
  }
}
