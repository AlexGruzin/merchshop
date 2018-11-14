export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {

    },

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
      height: '43px',
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
      padding: '0 17px',
      margin: 'auto 0',
    },

    Button: {
      lineHeight: '50px',
      textDecoration: 'none',
    },

    ButtonLabel: {},

    droppIcon: {
      margin: 'auto 5px',
      fontSize: '4px',
    },

    // ---- expanded part ----

    ExpandedSubRoutesContainer: {
      display: 'flex',
      position: 'relative',
      width: '100%',
      height: '0px',
      //transition: 'all .3s ease-in-out',
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

    SubButtonWrapper: {
      '&:hover': {
        background: colors.GRAY300,
      },

      height: '37px',
      display: 'flex',
      justifyContent: 'flex-start',
      padding: '0 17px',
      margin: '3px 0',
    },

    SubButton: {
      color: colors.BLACK,
      margin: 'auto 0',
      padding: '0px',
      textDecoration: 'none',
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
      borderBottom: `1px solid ${colors.GRAY400}`,
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
    },
    active: {
      background: colors.GRAY400,
    },

    deskSubButton: {
      textDecoration: 'none',
      width: '70%',
    },

    deskButtonLabel: {
      color: colors.BLACK
    },

  }
}
