import ActionsTypes from 'actionsTypes/views/authenticate';
import { createAction } from 'redux-actions';

export const sendLogInData = createAction( ActionsTypes.LOG_IN_REQUEST );
export const sendSignUpData = createAction( ActionsTypes.SIGN_UP_REQUEST );
