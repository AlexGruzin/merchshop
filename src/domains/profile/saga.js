import { put, take, all, takeEvery, race } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { get } from 'lodash';

import ActionsTypes from './actionsTypes';
import { DELAY_DURATIONS as delayDurations } from './constants';

import * as ActionCreators from './actionsCreators';
import { ActionsCreators as HTTPActionsCreators } from 'domains/http';
import { formatCreateProfileData, formatProfile } from './formatters';

function* getProfileWatcher() {
  yield takeEvery( ActionsTypes.START_GET_PROFILE, getProfileWorker );
}

function* getProfileWorker() {
  yield put( HTTPActionsCreators.makeSafeRequest( ActionCreators.getProfile()));

  const { response, timeout } = yield race({
    response: take([
      ActionsTypes.GET_PROFILE_SUCCESS,
      ActionsTypes.GET_PROFILE_FAILURE
    ]),
    timeout: delay( delayDurations.GET_PROFILE ),
  });

  if ( timeout || response.error ) {
    yield put( ActionCreators.setProfileError());
  } else {
    const user = formatProfile( get( response, 'payload.user', {}));
    yield put( ActionCreators.setProfileSuccess({ user }));
  }

  yield put( ActionCreators.finishGetProfile());
}

function* createProfileWatcher() {
  yield takeEvery( ActionsTypes.START_CREATE_PROFILE, createProfileWorker );
}

function* createProfileWorker({ payload }) {
  yield put(
    HTTPActionsCreators.makeRequest(
      ActionCreators.createProfile(
        formatCreateProfileData( payload )
      )
    )
  );

  const { response, timeout } = yield race({
    response: take([
      ActionsTypes.CREATE_PROFILE_SUCCESS,
      ActionsTypes.CREATE_PROFILE_FAILURE
    ]),
    timeout: delay( delayDurations.CREATE_PROFILE ),
  });
  //need to handle case when email were not sent, but user was successfully created.

  const isSuccess = !timeout && response.type === ActionsTypes.CREATE_PROFILE_SUCCESS;

  yield put( ActionCreators.finishCreateProfile({ isSuccess }));
}

export default function* profileSaga() {
  yield all([
    getProfileWatcher(),
    createProfileWatcher(),
  ]);
}
