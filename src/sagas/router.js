import { LOCATION_CHANGE } from 'react-router-redux';
import { takeEvery, cancel, call, fork, take, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
// constants
import * as Routes from 'constants/routing';
//selectors
import { Selectors as ProfileSelectors } from 'domains/profile';
// view sagas
import home from './views/home';
import authenticate from './views/authenticate';

// init
import initialize from './initialize';

const viewSagas = {
  [Routes.AUTHENTICATE]: authenticate,
  [Routes.HOME]: home,
};


let task = null;

function* onchange({ payload }) {
  const {
    pathname,
  } = payload;

  if ( task ) {
    yield cancel( task );
  }

  // const isLoggedIn = yield select(ProfileSelectors.isLoggedIn);
  // if (isLoggedIn) {
  //
  //     if(pathname === Routes.AUTHENTICATE) {
  //         yield put(push(pathname));
  //         return;
  //     }
  // }

  const currentRoute = Object
    .keys( viewSagas )
    .find( key => pathname.startsWith( key ));

  if ( currentRoute ) {
    task = yield fork( viewSagas[currentRoute]);
  }
}

export default function* routerSaga() {
  const action = yield take( LOCATION_CHANGE );
  const pathname = yield call( initialize, action );

  yield takeEvery( LOCATION_CHANGE, onchange );

  yield* onchange({ payload: { pathname } });
}
