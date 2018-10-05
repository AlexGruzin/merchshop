import ActionTypes from 'actionsTypes/loading';
import { fromJS } from 'immutable';
import { get } from 'lodash';

const initialState = fromJS({
  isLoading: false,
  isTransparent: true,
  message: null,
});

export default function (state = initialState, { type, payload }) {
  switch (type) {

    case ActionTypes.LOADING_START: {
      return state
        .set('isLoading', true)
        .set('isTransparent', get(payload, 'isTransparent') !== false)
        .set('message', get(payload, 'message'));
    }

    case ActionTypes.LOADING_FINISH: {
      return state
        .set('isLoading', false)
        .set('isTransparent', true);
    }

    default: {
      return state;
    }
  }
}
