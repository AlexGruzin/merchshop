import {
  fromJS,
} from 'immutable';

import ActionsTypes from './actionsTypes';

const initialState = fromJS({
    firstName: null,
    lastName: null,
    email: null,
    isActive: null,
});

export default () => ({
  profile: function (state = initialState, action) {
    switch (action.type) {
      case ActionsTypes.SET_PROFILE_SUCCESS:
        return state.mergeDeep(fromJS(action.payload.user));

      case ActionsTypes.SET_PROFILE_ERROR:
      case ActionsTypes.CLEAR_PROFILE:
        return initialState;

      //TODO other actions
            //TODO need to implement errors state and erros logic here.
      default:
        return state;
    }
  }
});
