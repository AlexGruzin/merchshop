import { RSAA } from 'redux-api-middleware';
import { createAction } from 'redux-actions';
import ActionsTypes from './actionsTypes';
import { ENDPOINTS } from './constants';

export const startGetProfile = createAction( ActionsTypes.START_GET_PROFILE );
export const finishGetProfile = createAction( ActionsTypes.FINISH_GET_PROFILE );
export const startCreateProfile = createAction( ActionsTypes.START_CREATE_PROFILE );
export const finishCreateProfile = createAction( ActionsTypes.FINISH_CREATE_PROFILE );
export const startDeleteProfile = createAction( ActionsTypes.START_DELETE_PROFILE );
export const finishDeleteProfile = createAction( ActionsTypes.FINISH_DELETE_PROFILE );

export const startSendResetPasswordMail = createAction( ActionsTypes.START_SEND_RESET_PASSWORD_MAIL );
export const finishSendResetPasswordMail = createAction( ActionsTypes.FINISH_SEND_RESET_PASSWORD_MAIL );
export const startResetPassword = createAction( ActionsTypes.START_RESET_PASSWORD );
export const finishResetPassword = createAction( ActionsTypes.FINISH_RESET_PASSWORD );

export const startResendActivationEmail = createAction( ActionsTypes.START_RESEND_ACTIVATION_EMAIL );
export const finishResendActivationEmail = createAction( ActionsTypes.FINISH_RESEND_ACTIVATION_EMAIL );
export const startConfirmActivation = createAction( ActionsTypes.START_CONFIRM_ACTIVATION );
export const finishConfirmActivation = createAction( ActionsTypes.FINISH_CONFIRM_ACTIVATION );

export const setProfileSuccess = createAction( ActionsTypes.SET_PROFILE_SUCCESS );
export const setProfileError = createAction( ActionsTypes.SET_PROFILE_ERROR );
export const clearProfile = createAction( ActionsTypes.CLEAR_PROFILE );

export const getProfile = () => ({
  [RSAA]: {
    endpoint: ENDPOINTS.GET_PROFILE,
    method: 'GET',
    types: [
      ActionsTypes.GET_PROFILE_REQUEST,
      ActionsTypes.GET_PROFILE_SUCCESS,
      ActionsTypes.GET_PROFILE_FAILURE,
    ],
  },
});

export const createProfile = profile => ({
  [RSAA]: {
    endpoint: ENDPOINTS.CREATE_PROFILE,
    method: 'POST',
    types: [
      ActionsTypes.CREATE_PROFILE_REQUEST,
      ActionsTypes.CREATE_PROFILE_SUCCESS,
      ActionsTypes.CREATE_PROFILE_FAILURE,
    ],
    body: JSON.stringify( profile ),
  },
});

export const deleteProfile = () => ({
  [RSAA]: {
    endpoint: ENDPOINTS.DELETE_PROFILE,
    method: 'DELETE',
    types: [
      ActionsTypes.DELETE_PROFILE_REQUEST,
      ActionsTypes.DELETE_PROFILE_SUCCESS,
      ActionsTypes.DELETE_PROFILE_FAILURE,
    ],
  },
});

export const confirmActivation = payload => ({
  [RSAA]: {
    endpoint: ENDPOINTS.CONFIRM_ACTIVATION,
    method: 'POST',
    types: [
      ActionsTypes.CONFIRM_ACTIVATION_REQUEST,
      ActionsTypes.CONFIRM_ACTIVATION_SUCCESS,
      ActionsTypes.CONFIRM_ACTIVATION_FAILURE,
    ],
    body: JSON.stringify( payload ),
  },
});

export const resendActivationEmail = () => ({
  [RSAA]: {
    endpoint: ENDPOINTS.RESEND_ACTIVATION_EMAIL,
    method: 'POST',
    types: [
      ActionsTypes.RESEND_ACTIVATION_EMAIL_REQUEST,
      ActionsTypes.RESEND_ACTIVATION_EMAIL_SUCCESS,
      ActionsTypes.RESEND_ACTIVATION_EMAIL_FAILURE,
    ],
  },
});

export const sendResetPasswordEmail = payload => ({
  [RSAA]: {
    endpoint: ENDPOINTS.SEND_RESET_PASSWORD_MAIL,
    method: 'POST',
    types: [
      ActionsTypes.SEND_RESET_PASSWORD_MAIL_REQUEST,
      ActionsTypes.SEND_RESET_PASSWORD_MAIL_SUCCESS,
      ActionsTypes.SEND_RESET_PASSWORD_MAIL_FAILURE,
    ],
    body: JSON.stringify( payload ),
  },
});

export const resetPassword = payload => ({
  [RSAA]: {
    endpoint: ENDPOINTS.RESET_PASSWORD,
    method: 'PUT',
    types: [
      ActionsTypes.RESET_PASSWORD_REQUEST,
      ActionsTypes.RESET_PASSWORD_SUCCESS,
      ActionsTypes.RESET_PASSWORD_FAILURE,
    ],
    body: JSON.stringify( payload ),
  },
});
