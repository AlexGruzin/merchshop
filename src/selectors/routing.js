import { createSelector } from 'reselect';

export const routingState = state => state.get( 'routing' );

export const route = createSelector(
  routingState,
  routingState => routingState.getIn(['location', 'pathname'])
);

export const firstRoute = createSelector(
  routingState,
  routingState => routingState.get( 'firstRoute' )
);
