import { RSAA } from 'redux-api-middleware';
import { createAction } from 'redux-actions';
import ActionsTypes from './actionsTypes';
import { ENDPOINTS } from './constants';

export const startSavingData = createAction( ActionsTypes.START_SAVE_DATA );
export const finishSavingData = createAction( ActionsTypes.FINISH_SAVE_DATA );

export const sendData = () => ({
  [RSAA]: {
    endpoint: ENDPOINTS.CHECKDATA,
    method: 'GET',
    types: [
      ActionsTypes.SEND_DATA_REQUEST,
      ActionsTypes.SEND_DATA_SUCCESS,
      ActionsTypes.SEND_DATA_FAILURE,
    ],
  },
});


