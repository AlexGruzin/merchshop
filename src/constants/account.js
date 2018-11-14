import { ACCOUNT,
  ORDER,
  WISHLIST,
  PAYMENT_METHODS,
  ACCOUNT_DETAILS,
  ADDRESSES } from 'constants/routing';
import { ShopItems } from 'constants/shop';

export const ACCOUNT_DROPPING_ROUTES = [{
  name: 'account:RecentOrders',
  route: ACCOUNT,
}, {
  name: 'account:WishList',
  route: WISHLIST,
}, {
  name: 'account:PaymentMethods',
  route: PAYMENT_METHODS,
}, {
  name: 'account:AccountDetails',
  route: ACCOUNT_DETAILS,
}, {
  name: 'account:Addresses',
  route: ADDRESSES,
}, {
  name: 'account:LogOut',
  route: '',
},
];

export const RECENT_ORDERS = [{
  id: '12312',
  date: '1 Nov 2018',
  status: 'Shipped',
  link: '/account/order/:1',
  images: ['/img/helmet4.jpg','/img/helmet3.jpg'],
}, {
  id: '45645',
  date: '5 Nov 2018',
  status: 'Processing Payment',
  link: '/account/order/:2',
  images: ['/img/helmet4.jpg'],
}, {
  id: '12312',
  date: '1 Nov 2018',
  status: 'Shipped',
  link: '/account/order/:1',
  images: ['/img/helmet4.jpg','/img/helmet3.jpg'],
}, {
  id: '45645',
  date: '5 Nov 2018',
  status: 'Processing Payment',
  link: '/account/order/:2',
  images: ['/img/helmet4.jpg'],
}
];

export const PAYMENT_METHODS_LIST = [{
  type: 'Credit Card',
  lastNumbers: '1243',
  card: 'Visa',
}, {
  type: 'Credit Card',
  lastNumbers: '1243',
  card: 'Visa',
}
];

export const WISH_LIST = [
  ShopItems[3],ShopItems[1],ShopItems[2],ShopItems[4]
];
