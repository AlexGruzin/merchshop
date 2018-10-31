import { all, take, takeEvery, put, select } from 'redux-saga/effects';
import 'regenerator-runtime/runtime';
import { debounceFor } from 'redux-saga-debounce-effect';
import { push } from 'react-router-redux';


function* checkoutCartWorker({ payload }) {

  yield put( stopLoading());
}

function* checkoutCartWatcher() {
  yield takeEvery( ActionsTypes.SIGN_IN_REQUEST, checkoutCartWorker );
}

export default function* homeSaga() {
  yield all([
    checkoutCartWatcher(),
  ]);
}
