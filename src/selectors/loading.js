import { createSelector } from 'reselect';

export const loadingState = state => state.get( 'loading' );

export const blocking = createSelector(
  loadingState,
  loadingState => loadingState.get( 'isLoading' ),
);

export const isTransparent = createSelector(
  loadingState,
  loadingState => !!loadingState.get( 'isTransparent' ),
);

export const message = createSelector(
  loadingState,
  loadingState => loadingState.get( 'message' ),
);
