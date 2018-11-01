import { RSAA } from 'redux-api-middleware';
import { createAction } from 'redux-actions';
import ActionsTypes from './actionsTypes';
import { ENDPOINTS } from './constants';

export const startCheckout = createAction( ActionsTypes.START_CHECKOUT );
export const finishCheckout = createAction( ActionsTypes.FINISH_CHECKOUT );

export const checkData = () => ({
  [RSAA]: {
    endpoint: ENDPOINTS.CHECKDATA,
    method: 'GET',
    types: [
      ActionsTypes.GET_DATA_REQUEST,
      ActionsTypes.GET_DATA_SUCCESS,
      ActionsTypes.GET_DATA_FAILURE,
    ],
  },
});

