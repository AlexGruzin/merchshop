import { LOCATION_CHANGE } from 'connected-react-router/immutable';
// constants
import * as Routes from 'constants/routing';
import { call, cancel, fork, take, takeEvery } from 'redux-saga/effects';
// init
import initialize from './initialize';
import authenticate from './views/authenticate';
//selectors
// import { Selectors as ProfileSelectors } from 'domains/profile';
// view sagas
import home from './views/home';

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
