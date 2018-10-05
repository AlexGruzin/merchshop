import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form';

//  domains
import { reducer as profile } from 'domains/profile';
import { reducer as session } from 'domains/session';

//  generic
import modals from './modals';
import routing from './routing';
import loading from './loading';
import authenticate from './authenticate';

//  views

export default combineReducers({
  form: formReducer,
  // generic
  routing,
  loading,
  modals,
  //  domains
  ...profile(),
  ...session(),
  //  views
  authenticate
});
