import { RSAA } from 'redux-api-middleware';
import { put, all, takeEvery, select, take } from 'redux-saga/effects';
import ActionsTypes from './actionsTypes';
import { Selectors } from 'domains/session';
import * as ActionsCreators from './actionsCreators';
import {
  AUTHORIZATION_ERROR,
  UNAUTHORIZED_USER,
  API_URL
} from './constants';
import { get } from 'lodash';

function* makeRequestWatcher() {
  yield takeEvery( ActionsTypes.MAKE_REQUEST, makeRequestWorker );
}

function* makeRequestWorker({ payload }) {
  const request = payload;
  request[RSAA].endpoint = API_URL + request[RSAA].endpoint;
  request[RSAA].headers = {
    'Content-Type': 'application/json',
  };

  yield put( request );
}

function* makeSafeRequestWatcher() {
  yield takeEvery( ActionsTypes.MAKE_SAFE_REQUEST, makeSafeRequestWorker );
}

function* makeSafeRequestWorker({ payload }) {
  const token = yield select( Selectors.token );
  const request = payload;
  request[RSAA].endpoint = API_URL + request[RSAA].endpoint;
  request[RSAA].headers = {
    'x-access-token': token,
    'Content-Type': 'application/json',
  };

  yield put( request );

  const action = yield take([
    request[RSAA].types[1],
    request[RSAA].types[2]
  ]);

  if ( action.type === request[RSAA].types[2]) {
    const code = get( action.payload, 'error.code' );
    if( code === AUTHORIZATION_ERROR || code === UNAUTHORIZED_USER ) {
      yield put( ActionsCreators.authenticationExpired());
    }
  }
}

export default function* profileSaga() {
  yield all([
    makeRequestWatcher(),
    makeSafeRequestWatcher(),
  ]);
}
