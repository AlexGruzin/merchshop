import { createAction } from 'redux-actions';
import ActionsTypes from 'actionsTypes/logout';

export const makeLogout = createAction( ActionsTypes.MAKE_LOGOUT );
