import { ActionsTypes } from 'domains/account';
import { fromJS } from 'immutable';

const initialState = fromJS({
  dataStatus: false,
});

export default function( state = initialState, { type, payload }) {
  switch ( type ) {

    case( ActionsTypes.FINISH_SAVE_DATA ): {
      return state.set( 'dataStatus', true );
    }

    default: {
      return state;
    }
  }
}
