import ActionsTypes from 'actionsTypes/views/account';
import { createAction } from 'redux-actions';

export const sendData = createAction( ActionsTypes.SEND_DATA );
