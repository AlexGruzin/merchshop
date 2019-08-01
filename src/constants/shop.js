export const COLLECTION_VIEW_MODES = {
  SINGLE: 'single',
  MULTI: 'multi',
};

export const VIEW_COMPONENTS = {
  MOBILE: 'mobile',
  DESKTOP: 'desktop',
};

export const PRODUCT_TYPES = {
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

export const PRODUCTS_FILTER = [
  {
    name: PRODUCT_TYPES.ALL,
  },{
    name: PRODUCT_TYPES.REGULAR,
  },{
    name: PRODUCT_TYPES.BLUETOOTH,
  },
];

export const STASHED_PRODUCT_TYPES = {
  SINGLE: 'single',
  TWIN: 'twin',
};

export const VIEW_COLUMNS = {
  MOBILE_SINGLE_VIEW: 1,
  MOBILE_MULTI_VIEW: 2,
  DESKTOP_SINGLE_VIEW: 3,
  DESKTOP_MULTI_VIEW: 6,
};

export const STEPS_VISUALISE = {
  SHIPPING: 'Shipping',
  PAYMENT: 'Payment',
  REVIEW: 'Review',
};

export const ShopItems = [{
  id: '001',
  productType: PRODUCT_TYPES.REGULAR,
  label: 'OSIRIS MAROON',
  cost: '299,000',
  rate: 4,
  reviews: 63,
  image: '/img/helmet1.jpg',
  viewType: STASHED_PRODUCT_TYPES.SINGLE,
  colors: [
    '#000',
    '#944f58',
    '#002b56',
    '#e8b117',
    '#9b9b9b'
  ],
  sizes: [
    'S',
    'M',
    'L'
  ],
  rateData: {
    totalAmount: 354,
    rates: [{
      5: 308
    }, {
      4: 38
    }, {
      3: 3
    }, {
      2: 1
    }, {
      1: 4
    },],
  },
  description: 'ZULU open-face helmet in Osiris features a sleek black glossy shell with a contrasting maroon interior. Features a high-impact ABS shell, vinyl leather interior, removable anti-bacterial liner, micro-metric buckle and a multi-density EPS liner. All ZULU helmets are SNI certified for maximum safety.',
  features: 'ZULU open-face helmet in Osiris features a sleek black glossy shell with a contrasting maroon interior. Features a high-impact ABS shell, vinyl leather interior, removable anti-bacterial liner, micro-metric buckle and a multi-density EPS liner. All ZULU helmets are SNI certified for maximum safety.',
  compose: 'x1 VIPER helmet\n x1 SNAP visor',
  videoUrl: 'https://www.youtube.com/watch?v=x5Kw_R6PjH8'
}, {
  id: '002',
  productType: PRODUCT_TYPES.REGULAR,
  label: 'ORION',
  cost: '399,000',
  rate: 4.5,
  reviews: 122,
  image: '/img/helmet2.jpg',
  viewType: STASHED_PRODUCT_TYPES.SINGLE,
}, {
  id: '003',
  productType: PRODUCT_TYPES.REGULAR,
  label: 'VIPER OFF WHITE RUBBER',
  cost: '250,000',
  rate: 4,
  reviews: 67,
  image: '/img/helmet3.jpg',
  images: ['/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg'],
  viewType: STASHED_PRODUCT_TYPES.SINGLE,
}, {
  id: '004',
  productType: PRODUCT_TYPES.REGULAR,
  label: 'OSIRIS MAROON',
  cost: '300,000',
  rate: 4,
  reviews: 63,
  image: '/img/helmet4.jpg',
  images: ['/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg'],
  viewType: STASHED_PRODUCT_TYPES.SINGLE,
}, {
  id: '005',
  productType: PRODUCT_TYPES.REGULAR,
  label: 'ST. GERMAIN WHITE CHROME',
  cost: '104,000',
  rate: 4.5,
  reviews: 122,
  image: '/img/helmet5.jpg',
  images: ['/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg'],
  viewType: STASHED_PRODUCT_TYPES.SINGLE,
}, {
  id: '006',
  productType: PRODUCT_TYPES.REGULAR,
  label: 'OSIRIS MAROON',
  cost: '299,000',
  rate: 4,
  reviews: 63,
  image: '/img/helmet1.jpg',
  images: ['/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg'],
  viewType: STASHED_PRODUCT_TYPES.SINGLE,
}, {
  id: '007',
  productType: PRODUCT_TYPES.REGULAR,
  label: 'ORION',
  cost: '399,000',
  rate: 4.5,
  reviews: 122,
  image: '/img/helmet2.jpg',
  images: ['/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg'],
  viewType: STASHED_PRODUCT_TYPES.SINGLE,
}, {
  id: '008',
  productType: PRODUCT_TYPES.REGULAR,
  label: 'VIPER YELLOW RUBBER',
  cost: '250,000',
  rate: 4,
  reviews: 67,
  image: '/img/helmet3.jpg',
  images: ['/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg'],
  viewType: STASHED_PRODUCT_TYPES.SINGLE,
}, {
  id: '009',
  productType: PRODUCT_TYPES.REGULAR,
  label: 'OSIRIS MAROON',
  cost: '300,000',
  rate: 4,
  reviews: 63,
  image: '/img/helmet4.jpg',
  images: ['/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg'],
  viewType: STASHED_PRODUCT_TYPES.SINGLE,
}, {
  id: '010',
  productType: PRODUCT_TYPES.REGULAR,
  label: 'ST. GERMAIN WHITE CHROME',
  cost: '104,000',
  rate: 4.5,
  reviews: 122,
  image: '/img/helmet5.jpg',
  images: ['/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg'],
  viewType: STASHED_PRODUCT_TYPES.SINGLE,
}, {
  id: '011',
  productType: PRODUCT_TYPES.REGULAR,
  label: 'OSIRIS MAROON',
  cost: '299,000',
  rate: 4,
  reviews: 63,
  image: '/img/helmet1.jpg',
  images: ['/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg'],
  viewType: STASHED_PRODUCT_TYPES.SINGLE,
}, {
  id: '012',
  productType: PRODUCT_TYPES.REGULAR,
  label: 'ORION',
  cost: '399,000',
  rate: 4.5,
  reviews: 122,
  image: '/img/helmet2.jpg',
  images: ['/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg'],
  viewType: STASHED_PRODUCT_TYPES.SINGLE,
}, {
  id: '013',
  productType: PRODUCT_TYPES.REGULAR,
  label: 'VIPER YELLOW RUBBER',
  cost: '250,000',
  rate: 4,
  reviews: 67,
  image: '/img/helmet3.jpg',
  images: ['/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg','/img/helmet3.jpg'],
  viewType: STASHED_PRODUCT_TYPES.SINGLE,
},
];

export const singleShopItem = {
  ...ShopItems[0],
  media: [
    { type: 'image', url: ShopItems[0].image },
    { type: 'image', url: ShopItems[1].image },
    { type: 'image', url: ShopItems[2].image },
    { type: 'image', url: ShopItems[3].image },
  ]
};

