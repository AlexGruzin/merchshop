import ActionTypes from 'actionsTypes/views/authenticate';
import { fromJS } from 'immutable';
import { get } from 'lodash';
import { TABS } from 'constants/authenticate';

const initialState = fromJS({
  selectedTab: TABS.SIGN_IN,
});

export default function( state = initialState, { type, payload }) {
  switch ( type ) {

    case( ActionTypes.SELECT_TAB ): {
      return state.set( 'selectedTab', get( payload, 'selectedTab' ));
    }

    default: {
      return state;
    }
  }
}
