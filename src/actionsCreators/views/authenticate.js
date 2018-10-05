import ActionsTypes from 'actionsTypes/views/authenticate';
import { createAction } from 'redux-actions';

export const sendSignUpData = createAction(ActionsTypes.SIGN_UP_REQUEST);
export const sendSignInData = createAction(ActionsTypes.SIGN_IN_REQUEST);

export const selectTab = createAction(ActionsTypes.SELECT_TAB);
