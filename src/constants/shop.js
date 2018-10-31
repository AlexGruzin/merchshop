export const productTypes = {
  ALL: 'All',
  REGULAR: 'Regular',
  BLUETOOTH: 'Bluetooth',
};

export const STAGES_TYPES = {
  CART: {
    label: 'Cart',
    number: 0,
  },
  SHIPPING: {
    label: 'Shipping',
    number: 1,
  },
  PAYMENT: {
    label: 'Payment',
    number: 2,
  },
  REVIEW: {
    label: 'Review',
    number: 3,
  },
};

export const productsFilter = [
  {
    name: productTypes.ALL,
  },{
    name: productTypes.REGULAR,
  },{
    name: productTypes.BLUETOOTH,
  },
];

export const STEPS_VISUALISE = {
  SHIPPING: 'Shipping',
  PAYMENT: 'Payment',
  REVIEW: 'Review',
};

export const ShopItems = [{
  id: '001',
  productType: productTypes.REGULAR,
  label: 'OSIRIS MAROON',
  cost: 2999,
  rate: 4,
  reviews: 63,
  image: '/img/helmet1.jpg',
}, {
  id: '002',
  productType: productTypes.REGULAR,
  label: 'ORION',
  cost: 3999,
  rate: 4.5,
  reviews: 122,
  image: '/img/helmet2.jpg',
}, {
  id: '003',
  productType: productTypes.REGULAR,
  label: 'OSIRIS',
  cost: 2500,
  rate: 4,
  reviews: 67,
  image: '/img/helmet3.jpg',
}, {
  id: '004',
  productType: productTypes.REGULAR,
  label: 'OSIRIS MAROON',
  cost: '300,000',
  rate: 4,
  reviews: 63,
  image: '/img/helmet4.jpg',
}, {
  id: '005',
  productType: productTypes.REGULAR,
  label: 'ORION',
  cost: '104,000',
  rate: 4.5,
  reviews: 122,
  image: '/img/helmet5.jpg',
}, {
  id: '006',
  productType: productTypes.REGULAR,
  label: 'OSIRIS MAROON',
  cost: 2999,
  rate: 4,
  reviews: 63,
  image: '/img/helmet1.jpg',
}, {
  id: '007',
  productType: productTypes.REGULAR,
  label: 'ORION',
  cost: 3999,
  rate: 4.5,
  reviews: 122,
  image: '/img/helmet2.jpg',
}, {
  id: '008',
  productType: productTypes.REGULAR,
  label: 'OSIRIS',
  cost: 2500,
  rate: 4,
  reviews: 67,
  image: '/img/helmet3.jpg',
},
];
