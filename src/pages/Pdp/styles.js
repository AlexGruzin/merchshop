export default ({ colors, palette, breakpoints, values }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [breakpoints.up( 'sm' )]: {
      flexDirection: 'row',
      padding: values.STANDARD_RELATIVE_SIZE
    }
  },
  leftSection: {
    [breakpoints.up( 'sm' )]: {
      width: '45%',
      padding: values.LARGE_RELATIVE_SIZE,
      flexShrink: 0
    }
  },
  rightSection: {
    [breakpoints.up( 'sm' )]: {
      flexGrow: 1,
      padding: values.LARGE_RELATIVE_SIZE
    }
  },
  sellItem: {
    flexGrow: 1
  },
  carousel: {
    width: '100%'
  },
  productBio: {
    padding: `${values.MASSIVE_RELATIVE_SIZE} ${values.LARGE_RELATIVE_SIZE} 0`,
    [breakpoints.up( 'sm' )]: {
      padding: 0
    }
  },
  productName: {
    fontWeight: 300,
    textTransform: 'uppercase'
  },
  price: {
    fontWeight: 700,
    marginTop: 10
  },
  headline: {
    margin: `${values.STANDARD_RELATIVE_SIZE} 0`
  },
  VariantSelection: {
    margin: `${values.STANDARD_RELATIVE_SIZE} 0`
  },
  Swabs: {
    margin: `${values.STANDARD_RELATIVE_SIZE} 0`
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  FormControl: {
    width: '80%'
  },
  sizing: {
    textDecoration: 'underline',
    cursor: 'pointer',
    marginLeft: 2
  },
  addToCart: {
    margin: `${values.SLIGHTLY_LARGER_RELATIVE_SIZE} 0`
  },
  collapseTitle: {
    textTransform: 'capitalize'
  },
  starDeactivated: {
    color: colors.GRAY_LIGHT,
  },

  starActivated: {
    color: colors.BLACK,
  },

  starHalf: {
  },
  star: {
    width: 10,
    height: 10
  },
  ratingWrapper: {
    margin: `0 ${values.SMALL_RELATIVE_SIZE}`,
    display: 'flex',
    alignItems: 'center'
  },
  reviews: {
    margin: `0 ${values.TINY_RELATIVE_SIZE}`,
    display: 'inline-block',
    cursor: 'pointer',
  },
  videoWrapper: {
    padding: values.STANDARD_RELATIVE_SIZE,
    [breakpoints.up( 'sm' )]: {
      padding: `${values.STANDARD_RELATIVE_SIZE} 0`
    }
  },
  videoInnerWrapper: {
    paddingTop: '56.25%',
    height: 0,
    width: '100%',
    position: 'relative'
  },
  select: {
    maxWidth: 195,
    [breakpoints.up( 'sm' )]: {
      maxWidth: 'none'
    }
  },
  collapseHeader: {
    boxShadow: '0 1px 3px 0 rgba(211, 211, 211, 0.5)',
    borderBottomStyle: 'none'
  },
  lastCollapseHeader: {
    borderBottomStyle: 'solid'
  }

})
