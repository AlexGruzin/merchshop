import { put, take, all, takeEvery, race } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import { delay } from 'redux-saga';
import { debounceFor } from 'redux-saga-debounce-effect';
import { push } from 'react-router-redux';
import { ActionsCreators as HTTPActionsCreators } from 'domains/http';
import ActionsTypes from './actionsTypes';
import * as ActionCreators from './actionsCreators';
import { DELAY_DURATIONS as delayDurations } from './constants';

function* cartWorker({ payload }) {
  yield put( HTTPActionsCreators.makeRequest( ActionCreators.checkData()));

  const { response, timeout } = yield race({
    response: take([
      ActionsTypes.CHECK_DATA_SUCCESS,
      ActionsTypes.CHECK_DATA_FAILURE,
    ]),
    timeout: delay( delayDurations.CHECKDATA ),
  });

  if ( timeout || response.error ) {
  } else {
  }

  yield put( ActionCreators.finishCheckout());
}

function* cartWatcher() {
  yield takeEvery( ActionsTypes.START_CHECKOUT, cartWorker );
}

export default function* cartSaga() {
  yield all([
    cartWatcher(),
  ]);
}
