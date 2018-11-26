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
    },

    mobileWishContainer: {
      display: 'flex',
      marginBottom: '20px',
      flexDirection: 'column',
    },
  }
}
