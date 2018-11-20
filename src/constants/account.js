import { ACCOUNT,
  ORDER,
  WISHLIST,
  PAYMENT_METHODS,
  ACCOUNT_DETAILS,
  ADDRESSES } from 'constants/routing';
import { ShopItems } from 'constants/shop';

export const ACCOUNT_DROPPING_ROUTES = [{
  name: 'account:Recent Orders',
  route: ACCOUNT,
}, {
  name: 'account:Wish List',
  route: WISHLIST,
}, {
  name: 'account:Payment Methods',
  route: PAYMENT_METHODS,
}, {
  name: 'account:Account Details',
  route: ACCOUNT_DETAILS,
}, {
  name: 'account:Addresses',
  route: ADDRESSES,
}, {
  name: 'account:Log Out',
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
