import { createStore, applyMiddleware, compose } from 'redux';
import { Map } from 'immutable';
import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';

// router
import history from './history';
import { routerMiddleware } from 'react-router-redux';

// middlewares
import createSagaMiddleware from 'redux-saga';
import { apiMiddleware } from 'redux-api-middleware';
import persistState from 'redux-localstorage';

// cookies
import Cookies from 'js-cookie';
import { createCookieMiddleware } from 'redux-cookie';

//helpers
import getLocalStorageConfig from 'services/localstorage';
import rootReducer from 'reducers';
import rootSaga from 'sagas';

// constants
import LOCAL_STORAGE_CONFIG from 'constants/localstorage';

let initialState = Map();

const enhancers = [
  persistState(['session', 'routing'], getLocalStorageConfig(LOCAL_STORAGE_CONFIG)),
];

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  apiMiddleware,
  sagaMiddleware,
  routerMiddleware(history),
  createCookieMiddleware(Cookies),
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  installDevTools(Immutable);
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

sagaMiddleware.run(rootSaga);

export default store;
