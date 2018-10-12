import {
  fromJS,
} from 'immutable';

import ActionsTypes from './actionsTypes';

const initialState = fromJS({
  token: null,
});

export default () =>({
  session: function( state = initialState, action ) {
    switch ( action.type ) {
      case ActionsTypes.SET_SESSION_SUCCESS:
        return state.set( 'token', action.payload );

      case ActionsTypes.SET_SESSION_TOKEN_FROM_COOKIE:
        return state.set( 'token', action.payload );

      case ActionsTypes.SET_SESSION_ERROR:
      case ActionsTypes.DELETE_SESSION:
      case ActionsTypes.CLEAR_SESSION:
        return initialState;

      default:
        return state;
    }
  }
});
