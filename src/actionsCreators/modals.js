import { createAction } from 'redux-actions';
import ActionsTypes from 'actionsTypes/modals';
import ModalsTypes from 'constants/modals';
import { Map } from 'immutable';

const openModal = ({ type, data = new Map() }) => ({
  type: ActionsTypes.OPEN,
  payload: {
    type,
    data,
  },
});

export const closeModal = createAction( ActionsTypes.CLOSE );

export const openLogRequestModal = () => openModal({ type: ModalsTypes.LOG_REQUEST });
export const openLogInModal = () => openModal({ type: ModalsTypes.LOG_IN });
export const openSignUpModal = () => openModal({ type: ModalsTypes.SIGN_UP });
