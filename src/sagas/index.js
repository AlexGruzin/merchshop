import { all } from 'redux-saga/effects';

import routerSaga from './router';
import logoutSaga from './logout';
import { saga as profileSaga } from 'domains/profile';
import { saga as httpSaga } from 'domains/http';
import { saga as sessionSaga } from 'domains/session';
import { saga as cartSaga } from 'domains/session';

export default function* rootSaga() {
  yield all([
    routerSaga(),
    logoutSaga(),
    // here can be only domain sagas
    httpSaga(),
    profileSaga(),
    sessionSaga(),
    cartSaga(),
  ]);
}
