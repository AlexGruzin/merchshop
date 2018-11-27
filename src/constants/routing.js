export const HOME = '/';
export const AUTHENTICATE = '/auth';
export const SHOP = '/shop';
export const PRODUCT = '/product/:productId';
export const ACCOUNT = '/account';
export const ORDER = '/account/order/:id';
export const WISHLIST = '/account/wishlist';
export const PAYMENT_METHODS = '/account/payment_methods';
export const ACCOUNT_DETAILS = '/account/details';
export const ADDRESSES = '/account/addresses';
export const ADD_CARD = '/account/add_card';
export const PDP = '/product/:product_slug';
export const ABOUT = '/about';

export const UNAUTHORIZED_ROUTES = [
  AUTHENTICATE,
];

export const UNACTIVATED_ROUTES = [
  HOME,
  SHOP,
  PRODUCT,
  ACCOUNT,
  PAYMENT_METHODS,
  ACCOUNT_DETAILS,
  ADDRESSES,
  ADD_CARD,
  ORDER,
];
