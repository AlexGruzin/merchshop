export default function({ colors, breakpoints, values, palette }) {
  return {
    mdUp: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '70px',
    },

    logoIcon: {
      margin: 'auto',
      height: '32px',
      fontSize: values.GIANT_FONT_SIZE,
    },

    mobileHeader: {
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
      padding: '0 10px'
    },

    leftIconsWrapper: {
      display: 'flex',
      flexGrow: '1',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '0 10px',
    },

    mobileIconSearch: {
      fontSize: '14px',
      padding: '5px',
      marginRight: '1.8vw',
    },

    mobileMenuIcon: {
      padding: '6px',
      fontSize: values.SMALL_FONT_SIZE,
    },

    mobileIconCan: {
      fontSize: '18px',
    },

    interactiveCan: {
      cursor: 'pointer',
      display: 'flex',
      padding: '5px',
      alignItems: 'center',
      justifyContent: 'center',
    },

    canNumberWrapper: {
      position: 'absolute',
      height: '0px',
    },

    canNumberLabel: {
      userSelect: 'none',
      cursor: 'pointer',
      height: '10px',
      position: 'relative',
      color: colors.BLACK,
      fontFamily: 'Avenir',
      fontSize: '10px',
      bottom: '5px',
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
    },

    // -- Search
    hider: {
      visibility: 'hidden',
      opacity: 0,
    },

    mobileHeaderSearch: {
      position: 'absolute',

      display: 'flex',
      width: '100%',
      height: '70px',
      alignItems: 'center',

      background: colors.WHITE,
    },

    searchElementsWrapper: {
      display: 'flex',
      width: '100%',
    },

    searchIconMode: {
      display: 'flex',
      alignItems: 'center',
      margin: '0 10px',
    },

    searchInputMode: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: '2',
    },

    closeIconMode: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end',
    },

    closeIconSvg: {
      display: 'flex',
      fontSize: values.EXTRA_SMALL_FONT_SIZE,
      height: '35px',
      width: '35px',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 10px',
    },

    searchInput: {
      display: 'flex',
      width: '100%',
      fontWeight: '300',
      fontFamily: 'Avenir',
      fontSize: '14px',
      lineHeight: '30px',
    },

    // ---- checkout
    checkoutSwiperWidth: {
      width: '100%',
    },
  }
}
