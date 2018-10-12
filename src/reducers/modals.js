import { Stack, fromJS } from 'immutable';

import ActionTypes from 'actionsTypes/modals';

const initialState = Stack();

export default function( state = initialState, action ) {
  switch ( action.type ) {

    case ActionTypes.OPEN: {
      return state.push( fromJS( action.payload ));
    }

    case ActionTypes.CLOSE: {
      return state.pop();
    }

    default: {
      return state;
    }
  }
}
