import { takeEvery, put, all } from 'redux-saga/effects';
import { expireCookie } from 'redux-cookie';
import { push } from 'react-router-redux';
import { AUTHENTICATE } from 'constants/routing';
import { ActionsCreators as SessionActionCreators, ActionsTypes as SessionActionsTypes } from 'domains/session';
import { ActionsCreators as ProfileActionCreators } from 'domains/profile';
import { ActionsTypes as HTTPActionsTypes } from 'domains/http';
import LogoutActionsTypes from 'actionsTypes/logout';

function* logoutSagaWorker() {
  yield put(SessionActionCreators.clearSession());
  yield put(ProfileActionCreators.clearProfile());
  yield put(expireCookie('token'));
  yield put(push(AUTHENTICATE));
}

function* logoutSagaWatcher () {
  yield takeEvery([
    HTTPActionsTypes.AUTHENTICATION_EXPIRED,
    SessionActionsTypes.FINISH_DELETE_SESSION
  ], logoutSagaWorker);
}

function* viewLogoutWatcher() {
  yield takeEvery(LogoutActionsTypes.MAKE_LOGOUT, viewLogoutWorker);
}

function* viewLogoutWorker () {
  yield put(SessionActionCreators.startDeleteSession());
}

export default function* logoutSaga() {
  yield all([
    logoutSagaWatcher(),
    viewLogoutWatcher(),
  ]);
}
