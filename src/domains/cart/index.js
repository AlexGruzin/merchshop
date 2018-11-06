import AllActionsTypes from './actionsTypes';
import * as AllActionsCreators from './actionsCreators';
import saga from './saga';

const ActionsTypes = {
  FINISH_GET_PROFILE: AllActionsTypes.FINISH_GET_PROFILE,
  FINISH_CREATE_PROFILE: AllActionsTypes.FINISH_CREATE_PROFILE,
};

const ActionsCreators = {
  startCheckout: AllActionsCreators.startCheckout,
};

export {
  ActionsTypes,
  ActionsCreators,
  saga,
};
