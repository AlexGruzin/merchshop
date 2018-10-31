import { RSAA } from 'redux-api-middleware';
import { createAction } from 'redux-actions';
import ActionsTypes from './actionsTypes';
import { ENDPOINTS } from './constants';

export const startCheckout = createAction( ActionsTypes.START_CHECKOUT );
export const finishCheckout = createAction( ActionsTypes.FINISH_CHECKOUT );

export const checkPromo = () => ({
  [RSAA]: {
    endpoint: ENDPOINTS.PROMO,
    method: 'GET',
    types: [
      ActionsTypes.GET_PROMO_REQUEST,
      ActionsTypes.GET_PROMO_SUCCESS,
      ActionsTypes.GET_PROMO_FAILURE,
    ],
  },
});

