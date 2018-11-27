import { createSelector } from 'reselect';

export const accountState = state => state.get( 'account' );

export const dataStatus = createSelector(
  accountState,
  accountState => accountState.get( 'dataStatus' ),
);
