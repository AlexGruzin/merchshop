import { createSelector } from 'reselect';

export const authenticateState = state => state.get('authenticate');

export const selectedTab = createSelector(
  authenticateState,
  authenticateState => authenticateState.get('selectedTab'),
);
