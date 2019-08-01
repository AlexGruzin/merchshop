export default function({ colors, values, breakpoints, palette }) {
  return {

    root: {
      display: 'flex',
      flexDirection: 'row',
      background: colors.WHITE,
    },

    wishContainer: {
      display: 'flex',
      flexGrow: 1,
      margin: '40px',

      [breakpoints.down( 'md' )]: {
        margin: `0 ${values.MOBILE_SMALL_SIDE_INDENT}`,
        marginTop: values.MOBILE_SMALL_SIDE_INDENT,
      }
    },

    mobileWishContainer: {
      display: 'flex',
      marginBottom: '20px',
      flexDirection: 'column',
    },
  }
}
