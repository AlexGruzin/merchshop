export default function({ colors, breakpoints, palette }) {
  return {
    rootHeader: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: palette.primary.main,
      width: '100%',
      height: '100px',
    },

    smDown: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100px',
    },
    logoRow: {
      display: 'flex',
      flexFlow: 'row',
      position: 'relative',
    },

    logoIcon: {
      height: '32px',
      fontSize: '32px',
      marginTop: '22px',
      marginLeft: 'calc(50% - 40px)',
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
      fontSize: '14px',
    },

    smallIconCan: {
      fontSize: '17px',
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

    // --------------------- ADVERTISMENT --------------------------
    promo: {
      color: colors.CORAL,
    },



    // ---- scaled styles ----

    canIcon: {
      color: colors.WHITE,
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

  };
}
