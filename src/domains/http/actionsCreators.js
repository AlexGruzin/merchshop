import { createAction } from 'redux-actions';
import ActionsTypes from './actionsTypes';

export const makeSafeContextRequest = createAction(ActionsTypes.MAKE_SAFE_CONTEXT_REQUEST);
export const makeSafeRequest = createAction(ActionsTypes.MAKE_SAFE_REQUEST);
export const makeRequest = createAction(ActionsTypes.MAKE_REQUEST);
export const requestSuccess = createAction(ActionsTypes.REQUEST_SUCCESS);
export const requestFailure = createAction(ActionsTypes.REQUEST_FAILURE);
export const authenticationExpired = createAction(ActionsTypes.AUTHENTICATION_EXPIRED);
