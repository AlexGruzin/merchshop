import * as ROUTES from 'constants/routing';

export default [
  {
    route: ROUTES.HOME,
    label: 'headerLinks:home',
    predicate: ({
       isAuthorized,
     }) => isAuthorized,
  }, {
    route: ROUTES.AUTHENTICATE,
    label: 'headerLinks:authenticate',
    predicate: ({
       isAuthorized,
     }) => !isAuthorized,
  },
];
