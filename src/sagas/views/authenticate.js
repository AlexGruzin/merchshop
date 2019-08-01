import { startLoading, stopLoading, } from 'actionsCreators/loading';
import { clearFirstRoute, } from 'actionsCreators/routing';
import { selectTab } from 'actionsCreators/views/authenticate';
import ActionsTypes from 'actionsTypes/views/authenticate';
import { push } from 'connected-react-router/immutable';
import { TABS } from 'constants/authenticate';
import { AUTHENTICATE, HOME } from 'constants/routing';
import {
  ActionsCreators as ProfileActionsCreators,
  ActionsTypes as ProfileActionsTypes,
} from 'domains/profile';
import {
  ActionsCreators as SessionActionsCreators,
  ActionsTypes as SessionActionsTypes,
  Selectors as SessionSelectors,
} from 'domains/session';
import { debounceFor } from 'redux-saga-debounce-effect';
import { all, put, select, take, takeEvery } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import * as RoutingSelectors from 'selectors/routing';

function* signInWorker({ payload }) {
  //TODO probably move to http saga
  yield put( startLoading({
    message: 'loading:loggingIn',
  }));
  yield put( SessionActionsCreators.startCreateSession( payload ));
  const successSession = yield take( SessionActionsTypes.FINISH_CREATE_SESSION );

  //TODO need to implement error in profile domain reducer and use them here to perform check
  const isAutorized = yield select( SessionSelectors.isAuthorized );

  if ( isAutorized ) {
    yield all([
      loadProfile(),
    ]);

    const firstRoute = yield select( RoutingSelectors.firstRoute );
    if ( firstRoute && firstRoute !== AUTHENTICATE ) {
      yield put( clearFirstRoute());
      yield put( push( firstRoute ));
    }
    yield put( push( HOME ));
  }

  yield put( stopLoading());
}

function* loadProfile() {
  yield put( ProfileActionsCreators.startGetProfile());
  yield take( ProfileActionsTypes.FINISH_GET_PROFILE );
}

function* signInWatcher() {
  yield takeEvery( ActionsTypes.SIGN_IN_REQUEST, signInWorker );
}

function* signUpWorker({ payload }) {
  yield put( startLoading({
    message: 'loading:signingUp',
  }));
  yield put( ProfileActionsCreators.startCreateProfile( payload ));
  const finishCreateProfileAction = yield take( ProfileActionsTypes.FINISH_CREATE_PROFILE );

  yield put( stopLoading());
  //need to handle case when email were not sent, but user was successfully created.
}

function* signUpWatcher() {
  yield takeEvery( ActionsTypes.SIGN_UP_REQUEST, signUpWorker );
}

export default function* authenticateSaga() {
  yield all([
    signUpWatcher(),
    signInWatcher(),
  ]);
}
