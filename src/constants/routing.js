export const HOME = '/';
export const AUTHENTICATE = '/auth';
export const SHOP = '/shop';
export const PRODUCT = '/product/:productId';

export const UNAUTHORIZED_ROUTES = [
  AUTHENTICATE,
];

export const UNACTIVATED_ROUTES = [
  HOME,
  SHOP,
  PRODUCT,
];
