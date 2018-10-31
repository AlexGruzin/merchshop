import AllActionsTypes from './actionsTypes';
import * as Selectors from './selectors';
import * as AllActionsCreators from './actionsCreators';
import saga from './saga';


const ActionsTypes = {
  FINISH_GET_PROFILE: AllActionsTypes.FINISH_GET_PROFILE,
  FINISH_CREATE_PROFILE: AllActionsTypes.FINISH_CREATE_PROFILE,
};

const ActionsCreators = {
  startGetProfile: AllActionsCreators.startGetProfile,
  startCreateProfile: AllActionsCreators.startCreateProfile,
};

export {
  Selectors,
  ActionsTypes,
  ActionsCreators,
  saga,
};
