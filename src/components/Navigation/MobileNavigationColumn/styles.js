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
      fontSize: values.LARGE_FONT_SIZE,
      padding: '5px',
      marginRight: '1.8vw',
    },

    mobileMenuIcon: {
      padding: '6px',
      fontSize: values.SMALL_FONT_SIZE,
    },

    mobileIconCan: {
      fontSize: values.GIANT_FONT_SIZE,
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
      height: '11px',
      position: 'relative',
      color: colors.BLACK,
      fontSize: '11px',
      bottom: '4px',
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
      marginLeft: '10px',
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
      fontSize: '6px',
      padding: '15px',
      alignItems: 'center',
      justifyContent: 'center',
    },

    searchInput: {
      display: 'flex',
      width: '100%',
      lineHeight: '30px',
    },

    // ---- checkout
    checkoutSwiperWidth: {
      width: '100%',
    },
  }
}
