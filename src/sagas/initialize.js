import { startLoading, stopLoading, } from 'actionsCreators/loading';
import { clearFirstRoute, setFirstRoute, } from 'actionsCreators/routing';
import { push } from 'connected-react-router/immutable';
import { put } from 'redux-saga/effects';

export default function* initializeSaga({ payload }) {
  yield put( startLoading({
    isTransparent: false,
    message: 'loading:startingOn',
  }));

  // yield put(SessionActionsCreators.startReadingTokenFromCookie());
  // yield take(SessionActionsTypes.FINISH_READ_TOKEN_FROM_COOKIE);
  //
  // const firstRoute = yield select(RoutingSelectors.firstRoute);
  // if(!firstRoute){
  //     yield put(setFirstRoute(payload.pathname));
  // }
  //
  // const isAuthorized = yield select(SessionSelectors.isAuthorized);
  //
  // let isLoggedIn;
  //
  // if(isAuthorized) {
  //     yield put(ProfileActionsCreators.startGetProfile());
  //     yield take(ProfileActionsTypes.FINISH_GET_PROFILE);
  //     isLoggedIn = yield select(ProfileSelectors.isLoggedIn);
  // }

  const {
    pathname,
  } = payload;
    // const pathnameRoute = '/' + pathname.split('/')[1];
  let newPathname = pathname;
  //
  // if(isAuthorized && isLoggedIn) {
  //     yield put(clearFirstRoute());
  //
  //     if (pathname === Routes.AUTHENTICATE) {
  //       yield put(push(newPathname = Routes.HOME));
  //     }
  // } else if (!includes(Routes.UNAUTHORIZED_ROUTES, pathnameRoute)){
  //     yield put(push(newPathname = Routes.AUTHENTICATE));
  // }

  yield put( stopLoading());
  return newPathname;
}
