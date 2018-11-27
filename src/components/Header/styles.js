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

    smallIconCan: {
      fontSize: values.GIANT_FONT_SIZE,
    },

    canWrapper: {
      display: 'flex',
      alignSelf: 'flex-end',
      alignItems: 'center',
      width: '40px',
      justifyContent: 'space-around',
      height: '32px', // equal to logo height
    },

    canNumberWrapper: {
      position: 'absolute',
      cursor: 'pointer',
      height: '0px',
    },

    canNumberLabel: {
      position: 'relative',
      color: colors.BLACK,
      fontSize: '11px',
      bottom: '6px',
    },

    swipeContainer: {
      display: 'flex',
      height: '100%',
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

      position: 'relative',
      boxShadow: '0 2px 4px 0 rgba(238, 238, 238, 0.5)',

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
      textDecoration: 'none',
      color: colors.BLACK,
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

    actionsWrapper: {
      display: 'flex',
      height: '50px',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      right: 0,
      marginRight: '3%',
      position: 'absolute',
    },

    // -- search

    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '30px',

      position: 'relative',


      '&:hover $placeHolderLabel': {
        width: '154px',
        border: '1px solid black',
        borderRadius: '3px',
      },

    },

    searchField: {
      height: '28px',
    },

    smallIconSearch: {
      padding: '3px',
      fontSize: values.MEDIUM_LARGE_FONT_SIZE,
      margin: '0 5px',
      left: '30px',
      position: 'relative',
    },

    placeHolderLabel: {
      padding: '0',
      paddingLeft: '30px',
      lineHeight: '28px',
      width: '0px',

      transition: 'width 0.5s ease-in-out',

      '&:focus': {
        width: '154px',
        border: '1px solid black',
        borderRadius: '3px',
      },

      '&::placeholder': {
        textOverflow: 'ellipsis !important',

        fontFamily: values.HELVETICA_NEUE,
        color: colors.BLACK,
        opacity: 1,
      }
    },

  };
}
