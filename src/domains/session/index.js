import AllActionsTypes from './actionsTypes';
import * as Selectors from './selectors';
import * as AllActionsCreators from './actionsCreators';
import saga from './saga';
import reducer from './reducer';
import * as cookieServices from './cookieServices'

const ActionsTypes = {
  FINISH_CREATE_SESSION: AllActionsTypes.FINISH_CREATE_SESSION,
  FINISH_DELETE_SESSION: AllActionsTypes.FINISH_DELETE_SESSION,
};

const ActionsCreators = {
  startCreateSession: AllActionsCreators.startCreateSession,
  startDeleteSession: AllActionsCreators.startDeleteSession,
  clearSession: AllActionsCreators.clearSession,
  setSessionContext: AllActionsCreators.setSessionContext,
  setSessionToken: AllActionsCreators.setSessionToken,
};

export {
  Selectors,
  ActionsTypes,
  ActionsCreators,
  reducer,
  saga,
  cookieServices,
};
