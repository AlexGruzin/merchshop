import AllActionsTypes from './actionsTypes';
import * as Selectors from './selectors';
import * as AllActionsCreators from './actionsCreators';
import saga from './saga';
import reducer from './reducer';

const ActionsTypes = {
  FINISH_GET_PROFILE: AllActionsTypes.FINISH_GET_PROFILE,
  FINISH_CREATE_PROFILE: AllActionsTypes.FINISH_CREATE_PROFILE,
  FINISH_DELETE_PROFILE: AllActionsTypes.FINISH_DELETE_PROFILE,
  FINISH_CONFIRM_ACTIVATION: AllActionsTypes.FINISH_CONFIRM_ACTIVATION,
  FINISH_RESEND_ACTIVATION_EMAIL: AllActionsTypes.FINISH_RESEND_ACTIVATION_EMAIL,
  FINISH_SEND_RESET_PASSWORD_MAIL: AllActionsTypes.FINISH_SEND_RESET_PASSWORD_MAIL,
  FINISH_RESET_PASSWORD: AllActionsTypes.FINISH_RESET_PASSWORD,
};

const ActionsCreators = {
  startGetProfile: AllActionsCreators.startGetProfile,
  startCreateProfile: AllActionsCreators.startCreateProfile,
  startDeleteProfile: AllActionsCreators.startDeleteProfile,
  startConfirmActivation: AllActionsCreators.startConfirmActivation,
  startResendActivationEmail: AllActionsCreators.startResendActivationEmail,
  clearProfile: AllActionsCreators.clearProfile,
  startSendResetPasswordMail: AllActionsCreators.startSendResetPasswordMail,
  startResetPassword: AllActionsCreators.startResetPassword,
};

export {
  Selectors,
  ActionsTypes,
  ActionsCreators,
  reducer,
  saga,
};
