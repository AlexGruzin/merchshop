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

export const openUpdatePlaceModal = originalData => openModal({ type: ModalsTypes.UPDATE_PLACE, data: { originalData } });
export const openCreatePlaceModal = () => openModal({ type: ModalsTypes.ADD_PLACE });
export const openForgotPasswordModal = () => openModal({ type: ModalsTypes.FORGOT_PASSWORD });
export const openAddCompanyModal = () => openModal({ type: ModalsTypes.ADD_COMPANY });
export const openAddFactoryModal = () => openModal({ type: ModalsTypes.ADD_FACTORY });
export const openAddSeriesIdentifierModal = () => openModal({ type: ModalsTypes.ADD_SERIES_IDENTIFIER });
