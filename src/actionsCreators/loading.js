import { createAction } from 'redux-actions';
import ActionsTypes from 'actionsTypes/loading';

export const startLoading = createAction(ActionsTypes.LOADING_START);
export const stopLoading = createAction(ActionsTypes.LOADING_FINISH);
