import { createStructuredSelector, createSelector } from 'reselect';
import LINK_LIST from 'constants/headerLinkList';
import { Selectors as SessionSelectors } from 'domains/session';
import { route } from 'selectors/routing';
import { AUTHENTICATE } from 'constants/routing';

const isNotAuthenticateHeaderSelector = createSelector(
  route,
  ( currentRoute ) => currentRoute !== AUTHENTICATE
);

const displayLogoutButton = createSelector(
  SessionSelectors.isAuthorized,
  isNotAuthenticateHeaderSelector,
  ( isAuthorized, isNotAuthenticateHeader ) => isNotAuthenticateHeader && isAuthorized
);

const linkList = createSelector(
  SessionSelectors.isAuthorized,
  isNotAuthenticateHeaderSelector,
  (
    isAuthorized,
    isNotAuthenticateHeader
  ) => LINK_LIST.filter( item => item.predicate({
    isAuthorized: isNotAuthenticateHeader && isAuthorized,
  }))
);

export default createStructuredSelector({
  linkList,
  displayLogoutButton,
});
