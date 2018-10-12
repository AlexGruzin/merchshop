import { LOCATION_CHANGE } from 'react-router-redux';
import ActionsTypes from 'actionsTypes/routing';
import { fromJS } from 'immutable';

const initialState = fromJS({
  location: {},
  firstRoute: null,
});
export default function( state = initialState, action ) {
  switch ( action.type ) {

    case LOCATION_CHANGE: {
      return state.set( 'location', fromJS( action.payload ));
    }

    case ActionsTypes.SET_FIRST_ROUTE: {
      return state.set( 'firstRoute', action.payload );
    }

    case ActionsTypes.CLEAR_FIRST_ROUTE: {
      return state.set( 'firstRoute', null );
    }

    default: {
      return state;
    }
  }
}
