import AllActionsTypes from './actionsTypes';
import * as Selectors from './selectors';
import * as AllActionsCreators from './actionsCreators';
import saga from './saga';
import reducer from './reducer';

const ActionsTypes = {
  FINISH_CREATE_SESSION: AllActionsTypes.FINISH_CREATE_SESSION,
  FINISH_DELETE_SESSION: AllActionsTypes.FINISH_DELETE_SESSION,
  FINISH_READ_TOKEN_FROM_COOKIE: AllActionsTypes.FINISH_READ_TOKEN_FROM_COOKIE,
};

const ActionsCreators = {
  startCreateSession: AllActionsCreators.startCreateSession,
  startDeleteSession: AllActionsCreators.startDeleteSession,
  startReadingTokenFromCookie: AllActionsCreators.startReadingTokenFromCookie,
  clearSession: AllActionsCreators.clearSession,
};

export {
  Selectors,
  ActionsTypes,
  ActionsCreators,
  reducer,
  saga,
};
