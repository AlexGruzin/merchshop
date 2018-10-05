import { createAction } from 'redux-actions';
import ActionsTypes from 'actionsTypes/routing';

export const setFirstRoute = createAction(ActionsTypes.SET_FIRST_ROUTE);
export const clearFirstRoute = createAction(ActionsTypes.CLEAR_FIRST_ROUTE);
