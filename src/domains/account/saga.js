import { put, take, all, takeEvery, race, call } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import { ActionsCreators as HTTPActionsCreators } from 'domains/http';
import ActionsTypes from './actionsTypes';
import * as ActionCreators from './actionsCreators';
import { DELAY_DURATIONS as delayDurations } from './constants';

function* accWorker({ payload }) {
  yield put( HTTPActionsCreators.makeRequest( ActionCreators.sendData()));

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

  yield put( ActionCreators.finishSavingData());
}

function* accWatcher() {
  yield takeEvery( ActionsTypes.START_SAVE_DATA, accWorker );
}

export default function* accountDomainSaga() {
  yield all([
    accWatcher(),
  ]);
}
