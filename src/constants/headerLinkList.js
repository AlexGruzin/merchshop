import * as ROUTES from 'constants/routing';

export const HEADER_LINKS_TYPES = {
  COMMON_ROUTE: 'commonRoute',
  SUB_ROUTER: 'subRouter',
};

export default [
  {
    type: HEADER_LINKS_TYPES.COMMON_ROUTE,
    route: ROUTES.HOME,
    label: 'headerLinks:shopAll',
    predicate: ({
      isAuthorized,
    }) => true || isAuthorized,
  }, {
    type: HEADER_LINKS_TYPES.COMMON_ROUTE,
    route: ROUTES.AUTHENTICATE,
    label: 'headerLinks:auth',
    predicate: ({
      isAuthorized,
    }) => true || !isAuthorized,
  },
  {
    type: HEADER_LINKS_TYPES.SUB_ROUTER,
    route: ROUTES.HOME,
    subRoutes: [
      {
        route: ROUTES.HOME,
        label: 'All'
      }, {
        route: ROUTES.HOME,
        label: 'Regular'
      }, {
        route: ROUTES.HOME,
        label: 'Bluetooth',
      }
    ],
    label: 'headerLinks:helm',
    predicate: ({
      isAuthorized,
    }) => true || isAuthorized,
  }, {
    type: HEADER_LINKS_TYPES.COMMON_ROUTE,
    route: ROUTES.HOME,
    label: 'headerLinks:masker',
    predicate: ({
      isAuthorized,
    }) => true || isAuthorized,
  }, {
    type: HEADER_LINKS_TYPES.COMMON_ROUTE,
    route: ROUTES.HOME,
    label: 'headerLinks:aksesoris',
    predicate: ({
      isAuthorized,
    }) => true || isAuthorized,
  }, {
    type: HEADER_LINKS_TYPES.COMMON_ROUTE,
    route: ROUTES.HOME,
    label: 'headerLinks:pakaian',
    predicate: ({
      isAuthorized,
    }) => true ||  isAuthorized,
  }, {
    type: HEADER_LINKS_TYPES.COMMON_ROUTE,
    route: ROUTES.HOME,
    label: 'headerLinks:promo',
    predicate: ({
      isAuthorized,
    }) => true || isAuthorized,
  }, {
    type: HEADER_LINKS_TYPES.SUB_ROUTER,
    route: ROUTES.HOME,
    subRoutes: [
      {
        route: ROUTES.HOME,
        label: 'How to Order',
      }, {
        route: ROUTES.HOME,
        label: 'Customer Service',
      }, {
        route: ROUTES.HOME,
        label: 'FAQs',
      }, {
        route: ROUTES.HOME,
        label: 'Sizing Guide',
      }, {
        route: ROUTES.HOME,
        label: 'About Us',
      },
    ],
    label: 'headerLinks:moreInfo',
    predicate: ({
      isAuthorized,
    }) => true || isAuthorized,
  },
];
