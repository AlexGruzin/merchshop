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

// cookies
import Cookies from 'js-cookie';
import { createCookieMiddleware } from 'redux-cookie';

//helpers
import rootReducer from 'reducers';
import rootSaga from 'sagas';

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
  rootReducer,
  initialState,
  composedEnhancers,
);

sagaMiddleware.run( rootSaga );

export default store;
