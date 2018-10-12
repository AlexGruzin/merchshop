import * as ROUTES from 'constants/routing';

export default [
  {
    route: ROUTES.HOME,
    label: 'footerLinks:AboutUs',
    predicate: ({
      isAuthorized,
    }) => isAuthorized,
  }, {
    route: ROUTES.HOME,
    label: 'footerLinks:CustomerService',
    predicate: ({
      isAuthorized,
    }) => isAuthorized,
  }, {
    route: ROUTES.HOME,
    label: 'footerLinks:FAQs',
    predicate: ({
      isAuthorized,
    }) => isAuthorized,
  }, {
    route: ROUTES.HOME,
    label: 'footerLinks:SizingGuide',
    predicate: ({
      isAuthorized,
    }) => isAuthorized,
  },
];
