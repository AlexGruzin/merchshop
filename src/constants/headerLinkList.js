import * as ROUTES from 'constants/routing';

export const HEADER_LINKS_TYPES = {
  COMMON_ROUTE: 'commonRoute',
  SUB_ROUTER: 'subRouter',
};

export const AUTH_LINK = {
  type: HEADER_LINKS_TYPES.COMMON_ROUTE,
  route: ROUTES.AUTHENTICATE,
  label: 'headerLinks:auth',
  predicate: ({
    isAuthorized,
  }) => true || !isAuthorized,
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
    type: HEADER_LINKS_TYPES.SUB_ROUTER,
    route: ROUTES.HOME,
    subRoutes: [
      {
        route: '/Shop#All',
        label: 'All'
      }, {
        route: '/Shop#Regular',
        label: 'Regular'
      }, {
        route: '/Shop#Bluetooth',
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
        route: '/HowToOrder',
        label: 'How to Order',
      }, {
        route: '/CustomerService',
        label: 'Customer Service',
      }, {
        route: '/FAQs',
        label: 'FAQs',
      }, {
        route: '/SizingGuide',
        label: 'Sizing Guide',
      }, {
        route: '/AboutUs',
        label: 'About Us',
      },
    ],
    label: 'headerLinks:moreInfo',
    predicate: ({
      isAuthorized,
    }) => true || isAuthorized,
  },
];
