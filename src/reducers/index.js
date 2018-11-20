import { connectRouter } from 'connected-react-router/immutable';
//  domains
import { reducer as profile } from 'domains/profile';
import { reducer as session } from 'domains/session';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux-immutable';
import authenticate from './authenticate';
import loading from './loading';
//  generic
import modals from './modals';
import routing from './routing';
import account from './account';

// views

export default history => combineReducers({
  router: connectRouter( history ),
  form: formReducer,
  // generic
  routing,
  loading,
  modals,
  //  domains
  ...profile(),
  ...session(),
  //  views
  authenticate,
  account,
})
