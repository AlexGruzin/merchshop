export default ({ values, breakpoints }) => ({
  bestSellers: {
    padding: '16px 0 27px 0',
    margin: 'auto',
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
    fontWeight: 700,
  }
});
