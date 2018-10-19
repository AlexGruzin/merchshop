export default function({ colors, breakpoints, palette }) {
  return {
    ExpandedButtonContainer: {
      display: 'flex',
      zIndex: '100',
      flexDirection: 'column',
      minWidth: '100px',
      width: '110px',

      '&:hover $ExpandedSubRoutesContainer': {
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
      margin: 'auto 10px',
    },

    Button: {
      lineHeight: '50px',
      textDecoration: 'none',
    },

    ButtonLabel: {},

    // ---- expanded part ----

    ExpandedSubRoutesContainer: {
      display: 'flex',
      position: 'relative',
      width: '100%',
      height: '0px',
      transition: 'all .3s ease-in-out',
      visibility: 'hidden',
      opacity: 0,
    },


    ExpandedSubRoutes: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      background: palette.primary.main,
      boxShadow: '0px 6px 9px 0px rgba(0, 0, 0, 0.2)',

      transition: 'top .4s ease-in-out',
      top: '-20px',
      width: '210px',
    },

    SubButtonWrapper: {
      '&:hover': {
        background: colors.GREY300,
      },

      height: '37px',
      display: 'flex',
      justifyContent: 'flex-start',

      [breakpoints.down( 'lg' )]: {
        paddingLeft: '3px',
      },
      [breakpoints.up( 'lg' )]: {
        paddingLeft: '20px',
      },
    },

    SubButton: {
      margin: 'auto 0',
      padding: '5px',
      textDecoration: 'none',
    },

  }
}
