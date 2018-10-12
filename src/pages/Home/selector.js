import { createStructuredSelector } from 'reselect';
import { route } from 'selectors/routing';
import { Selectors as ProfileSelectors } from 'domains/profile';

export default createStructuredSelector({
  route: route,
  email: ProfileSelectors.email
});
