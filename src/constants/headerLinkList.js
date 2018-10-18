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
        route: '21',
        label: 'All'
      }, {
        route: '22',
        label: 'Regular'
      }, {
        route: '23',
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
        route: '11',
        label: 'How to Order',
      }, {
        route: '12',
        label: 'Customer Service',
      }, {
        route: '13',
        label: 'FAQs',
      }, {
        route: '14',
        label: 'Sizing Guide',
      }, {
        route: '15',
        label: 'About Us',
      },
    ],
    label: 'headerLinks:moreInfo',
    predicate: ({
      isAuthorized,
    }) => true || isAuthorized,
  },
];
