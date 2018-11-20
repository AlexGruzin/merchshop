import { routerMiddleware } from 'connected-react-router/immutable';
import Immutable, { Map } from 'immutable';
import installDevTools from 'immutable-devtools';
// cookies
import Cookies from 'js-cookie';
//helpers
import createRootReducer from 'reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { createCookieMiddleware } from 'redux-cookie';
// middlewares
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';
// router
import history from './history';

let initialState = Map();

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  apiMiddleware,
  sagaMiddleware,
  routerMiddleware( history ),
  createCookieMiddleware( Cookies ),
];

const enhancers = [];

if ( process.env.NODE_ENV === 'development' ) {
  const devToolsExtension = window.devToolsExtension;

  if ( typeof devToolsExtension === 'function' ) {
    enhancers.push( devToolsExtension());
  }

  installDevTools( Immutable );
}

const composedEnhancers = compose(
  applyMiddleware( ...middleware ),
  ...enhancers,
);

const store = createStore(
  createRootReducer( history ),
  initialState,
  composedEnhancers,
);

sagaMiddleware.run( rootSaga );

export default store;
