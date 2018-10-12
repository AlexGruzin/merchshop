import { createSelector } from 'reselect';

export const sessionState = state => state.get( 'session' );

export const token = createSelector(
  sessionState,
  session => session.get( 'token' )
);

export const isAuthorized = createSelector(
  sessionState,
  session => !!session.get( 'token' )
);
