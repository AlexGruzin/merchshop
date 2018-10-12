import { put, take, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as Routes from 'constants/routing';
import {
  ActionsCreators as ProfileActionsCreators,
  ActionsTypes as ProfileActionsTypes,
  Selectors as ProfileSelectors
} from 'domains/profile';
import {
  ActionsCreators as SessionActionsCreators,
  ActionsTypes as SessionActionsTypes,
  Selectors as SessionSelectors,
} from 'domains/session';
import {
  startLoading,
  stopLoading,
} from 'actionsCreators/loading';
import {
  setFirstRoute,
  clearFirstRoute,
} from 'actionsCreators/routing';


import * as RoutingSelectors from 'selectors/routing';
import { includes } from 'lodash';

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
