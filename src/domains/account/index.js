import AllActionsTypes from './actionsTypes';
import * as AllActionsCreators from './actionsCreators';
import saga from './saga';

const ActionsTypes = {
  FINISH_SAVE_DATA: AllActionsTypes.FINISH_SAVE_DATA,
};

const ActionsCreators = {
  startSavingData: AllActionsCreators.startSavingData,
};

export {
  ActionsTypes,
  ActionsCreators,
  saga,
};
