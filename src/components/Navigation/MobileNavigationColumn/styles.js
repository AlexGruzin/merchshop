export default function({ colors, breakpoints, values, palette }) {
  return {
    logoIcon: {
      margin: 'auto',
      height: '32px',
      fontSize: values.GIANT_FONT_SIZE,
    },

    mdUp: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '70px',
    },

    headerFlexPart: {
      display: 'flex',
      flexGrow: '1',
      width: '33%',
      height: '70px',
    },

    menuIconWrapper: {
      display: 'flex',
      alignItems: 'center',
    },

    leftIconsWrapper: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
      margin: 'auto 5px'
    },

    mobileIconSearch: {
      fontSize: '17px',
      padding: '0 10px',
    },

    mobileIconCan: {
      fontSize: values.EXTRA_LARGE_FONT_SIZE,
      padding: '0 10px',
    },

    mobileMenuIcon: {
      padding: '0 20px',
      fontSize: values.MEDIUM_FONT_SIZE,
    },

    // ---- Swiping menu ----
    swiperWidth: {
      width: '85%',
    },

    swipedLogoWrapper: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    },

    swipedLogo: {
      fontSize: values.GIANT_FONT_SIZE,
      margin: '10px 0',
    },

    swipedButtonWrapper: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    },

    swipedButton: {
      width: '50%',
      minWidth: '150px',
      margin: '10% 0',
      border: `solid 1px ${colors.BLACK}`
    }
  }
}
