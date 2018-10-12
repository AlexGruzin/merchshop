import { createSelector } from 'reselect';

export const profileState = state => state.get( 'profile' );

export const isLoggedIn = createSelector(
  profileState,
  profile => !!profile.get( 'email' )
);

export const email = createSelector(
  profileState,
  profile => profile.get( 'email' )
);


