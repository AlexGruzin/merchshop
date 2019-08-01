export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {},

    // ----------- mobile ----------

    mdUp: {
      display: 'flex',
      flexGrow: 1,

      marginBottom: '10px',
    },

    dropButtonContainer: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'center',
      zIndex: '100',
      boxShadow: '0 2px 4px 0 rgba(238, 238, 238, 0.5)',
      flexDirection: 'column',

      '&:hover $ExpandedSubRoutesContainer': {
        zIndex: '10',
        opacity: 1,
        visibility: 'visible',
        transition: 'all .3s ease-in-out',

        '& $ExpandedSubRoutes': {
          transition: 'top .4s ease-in-out',
          top: '0px',
        }
      },
    },

    ButtonWrapper: {
      display: 'flex',
      flexDirection: 'row',

    },

    Button: {
      lineHeight: '50px',
      textDecoration: 'none',
    },

    ButtonLabel: {},

    dropIcon: {
      margin: 'auto 5px',
      fontSize: values.EXPAND_ICON_SIZE,
    },

    // ---- expanded part ----

    ExpandedSubRoutesContainer: {
      display: 'flex',
      position: 'relative',
      width: '100%',
      height: '0px',
      visibility: 'hidden',
      opacity: 0,
    },

    ExpandedSubRoutes: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'absolute',
      background: palette.primary.main,
      boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.2)',
    },



    SubButton: {
      display: 'flex',
      justifyContent: 'flex-start',

      '&:hover': {
        background: colors.GRAY300,
      },

      color: colors.BLACK,
      textDecoration: 'none',
      padding: `15px ${values.MOBILE_MEDIUN_SIDE_INDENT}`,
    },

    // --------- desktop ----------
    smDown: {
      display: 'flex',
      width: '250px',
      flexDirection: 'column',
      background: colors.GRAY50,

      minHeight: '700px',
    },

    columnContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',

    },

    welcomeContainer: {
      display: 'flex',
      alignItems: 'center',
      height: '100px',
      borderBottom: `2px solid ${colors.GRAY_ACTIVE}`,
      paddingLeft: '17px',
    },

    welcomeLabel: {
      whiteSpace: 'pre-line',
    },

    deskButtonWrapper: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      height: '42px',
      paddingLeft: '17px',
      marginTop: '15px',
    },

    active: {
      background: colors.GRAY_ACTIVE,
    },

    deskSubButton: {
      textDecoration: 'none',
      width: '70%',
    },

    deskButtonLabel: {
      color: colors.BLACK,
      letterSpacing: '0.5px',
    },

  }
}
