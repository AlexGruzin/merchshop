export default function({ colors, breakpoints, palette, values }) {
  return {

    smDown: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100px',
    },
    logoRow: {
      display: 'flex',
      height: '50px',
      flexFlow: 'row',
      position: 'relative',
    },

    'headerlinks:promo': {
      color: colors.CORAL,
    },

    iconsWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      right: 0,
      marginRight: '3%',
      position: 'absolute',
      top: '23px',
    },

    headerIcons: {
      display: 'flex',
      alignSelf: 'flex-end',
      alignItems: 'center',
      width: '80px',
      justifyContent: 'space-around',
      height: '32px', // equal to logo height
    },

    smallIconSearch: {
      fontSize: values.MEDIUM_LARGE_FONT_SIZE,
    },

    smallIconCan: {
      fontSize: values.LARGE_FONT_SIZE,
    },

    navigationRow: {
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
      height: '50px',
      backgroundColor: palette.primary.main,
    },

    navRowWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
      height: '50px',
      margin: 'auto',

    },

    // ---- scaled styles ----

    rootHeader: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: palette.primary.main,
      width: '100%',

      [breakpoints.down( 'md' )]: {
        height: '70px',
      },
      [breakpoints.up( 'md' )]: {
        height: '100px',
      },
    },

    logoContainer: {
      display: 'flex',

      [breakpoints.up( 'md' )]: {
        margin: '0 auto',
        alignSelf: 'flex-end',
      },
    },

    logoIcon: {
      height: '32px',
      fontSize: values.GIANT_FONT_SIZE,
      marginTop: '22px',
      marginLeft: 'calc(50% - 40px)',

      margin: '0 auto',
      alignSelf: 'flex-end',
    },

    authHeadeRroot: {
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    authLogoRow: {

    },

    authLogoLink: {
      textDecoration: 'none',
      color: colors.BLACK,
    },

    authLogoIcon: {
      height: '32px',
      fontSize: values.GIANT_FONT_SIZE,
      marginLeft: 'calc(50% - 40px)',
    },

    // ---- checkout
    checkoutSwiperWidth: {
      minWidth: '320px',
      width: '35%',
    },
  };
}
