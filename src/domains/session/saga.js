import { put, take, takeEvery, all, race } from 'redux-saga/effects';
import { setCookie, getCookie } from 'redux-cookie';
import { expireCookie } from 'redux-cookie';
import { DAYS_BEFORE_EXPIRATION } from './constants';
import { delay } from 'redux-saga';
import { get } from 'lodash';
import ActionsTypes from './actionsTypes';
import { DELAY_DURATIONS as delayDurations } from './constants';

import * as ActionCreators from './actionsCreators';
import { ActionsCreators as HTTPActionsCreators } from 'domains/http';
import { formatCreateSessionData } from './formatters';

function* createSessionWatcher() {
  yield takeEvery( ActionsTypes.START_CREATE_SESSION, createSessionWorker );
}

function* createSessionWorker({ payload }) {
  yield put(
    HTTPActionsCreators.makeRequest(
      ActionCreators.createSession(
        formatCreateSessionData( payload )
      )
    )
  );

  const { response, timeout } = yield race({
    response: take([
      ActionsTypes.CREATE_SESSION_SUCCESS,
      ActionsTypes.CREATE_SESSION_FAILURE,
    ]),
    timeout: delay( delayDurations.CREATE_SESSION ),
  });

  if ( timeout || response.error ) {
    yield put( ActionCreators.setSessionError());
  } else {
    const token = get( response, ['payload', 'token'], {});
    yield put( setCookie( 'token', token, { expires: DAYS_BEFORE_EXPIRATION }));
    yield put( ActionCreators.setSessionSuccess( token ));
  }

  yield put( ActionCreators.finishCreateSession());
}

function* deleteSessionWatcher() {
  yield takeEvery( ActionsTypes.START_DELETE_SESSION, deleteSessionWorker );
}

function* deleteSessionWorker() {
  yield put( expireCookie( 'token' ));
  yield put( ActionCreators.deleteSession());
  yield put( ActionCreators.finishDeleteSession());
}

function* readTokenFromCookieWatcher() {
  yield takeEvery( ActionsTypes.START_READ_TOKEN_FROM_COOKIE, readTokenFromCookieWorker );
}

function* readTokenFromCookieWorker() {
  const token = yield put( getCookie( 'token' ));

  if ( token ) {
    yield put( ActionCreators.setSessionTokenFromCookie({ token }))
  }
}

export default function* sessionSaga() {
  yield all([
    createSessionWatcher(),
    deleteSessionWatcher(),
    readTokenFromCookieWatcher()
  ]);
}
