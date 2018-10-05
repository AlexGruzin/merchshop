import { RSAA } from 'redux-api-middleware';
import { createAction } from 'redux-actions';
import ActionsTypes from './actionsTypes';
import { ENDPOINTS } from './constants';

export const startCreateSession = createAction(ActionsTypes.START_CREATE_SESSION);
export const finishCreateSession = createAction(ActionsTypes.FINISH_CREATE_SESSION);
export const startDeleteSession = createAction(ActionsTypes.START_DELETE_SESSION);
export const finishDeleteSession = createAction(ActionsTypes.FINISH_DELETE_SESSION);
export const clearSession = createAction(ActionsTypes.CLEAR_SESSION);
export const setSessionError = createAction(ActionsTypes.SET_SESSION_ERROR);
export const setSessionSuccess = createAction(ActionsTypes.SET_SESSION_SUCCESS);
export const setSessionContext = createAction(ActionsTypes.SET_SESSION_CONTEXT);

//export const checkSessionToken = createAction(ActionsTypes.CHECK_SESSION_TOKEN);
export const setSessionToken = createAction(ActionsTypes.SET_SESSION_TOKEN);

export const createSession = data => ({
  [RSAA]: {
    endpoint: ENDPOINTS.CREATE_SESSION,
    method: 'post',
    types: [
      ActionsTypes.CREATE_SESSION_REQUEST,
      ActionsTypes.CREATE_SESSION_SUCCESS,
      ActionsTypes.CREATE_SESSION_FAILURE,
    ],
    body: JSON.stringify(data)
  }
});

export const deleteSession = createAction(ActionsTypes.DELETE_SESSION);
