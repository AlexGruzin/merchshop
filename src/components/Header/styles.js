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

    expandPanel: {
      '&:before': {
        content: 'none',
      },
      boxShadow: 'none',
      backgroundColor: 'transparent',
      maxWidth: '100px',
      height: '50px',
      zIndex: '100',
    },

    expandPanelExpanded: {
      maxHeight: '50px',
      margin: 0,
    },

    rootSummary: {
      height: '50px',
      maxWidth: '100px',
      maxHeight: '50px',
      margin: 0,
      padding: 0,
    },

    contentSummary: {
    },

    summaryExpanded: {
      minHeight: 'unset !important',
    },

    expandedActionsWrapper: {
      margin: 0,
    },

    expandedActionsRoot: {
      padding: 0,
    },

    expandSubButtonLabel: {
      textAlign: 'left',
    },

    navigationExpandedButton: {
      justifyContent: 'flex-start',
      padding: '0 35px',
      height: '37px',
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

      [breakpoints.down( 'md' )]: {
        margin: 'auto',
      },
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

      [breakpoints.down( 'md' )]: {
        margin: 'auto',
      },
      [breakpoints.up( 'md' )]: {
        margin: '0 auto',
        alignSelf: 'flex-end',
      },
    },

    // ------ mobile styles only ------

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
      margin: 'auto 20px'
    },

    mobileIconSearch: {
      fontSize: values.LARGE_FONT_SIZE,
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
  };
}
