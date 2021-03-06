export default ({ values, breakpoints }) => ({
  bestSellers: {
    margin: '16px 0 27px 0',

    '& .slick-slider': {
      padding: '0 50px',
      [breakpoints.down( 'xs' )]: {
        padding: '0 25px'
      }
    },
    '& .slick-list': {
      overflow: 'visible'
    }
  },

  bestSellersItems: {
    height: '243px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  slide: {
    padding: values.SMALL_RELATIVE_SIZE
  },
  productBox: {
    width: '100%'
  },
  title: {
    margin: `${values.SMALL_RELATIVE_SIZE} 30px`,
    fontSize: values.EXTRA_GIANT_FONT_SIZE,
  }
});
