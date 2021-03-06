import LogoutActionsTypes from 'actionsTypes/logout';
import { push } from 'connected-react-router/immutable';
import { AUTHENTICATE } from 'constants/routing';
import { ActionsTypes as HTTPActionsTypes } from 'domains/http';
import { ActionsCreators as ProfileActionCreators } from 'domains/profile';
import {
  ActionsCreators as SessionActionCreators,
  ActionsTypes as SessionActionsTypes
} from 'domains/session';
import { all, put, takeEvery } from 'redux-saga/effects';

function* logoutSagaWorker() {
  yield put( SessionActionCreators.clearSession());
  yield put( ProfileActionCreators.clearProfile());
  yield put( push( AUTHENTICATE ));
}

function* logoutSagaWatcher() {
  yield takeEvery([
    HTTPActionsTypes.AUTHENTICATION_EXPIRED,
    SessionActionsTypes.FINISH_DELETE_SESSION
  ], logoutSagaWorker );
}

function* viewLogoutWatcher() {
  yield takeEvery( LogoutActionsTypes.MAKE_LOGOUT, viewLogoutWorker );
}

function* viewLogoutWorker() {
  yield put( SessionActionCreators.startDeleteSession());
}

export default function* logoutSaga() {
  yield all([
    logoutSagaWatcher(),
    viewLogoutWatcher(),
  ]);
}
