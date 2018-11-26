export default function({ colors, breakpoints, palette }) {
  return {
    ExpandedButtonContainer: {
      display: 'flex',
      zIndex: '100',
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
      display: 'flex',
      width: '100%'
    },

    ButtonLabel: {
      fontWeight: 500
    },

    // ---- expanded part ----

    ExpandedSubRoutesContainer: {
      display: 'flex',
      position: 'absolute',
      width: '100%',
      height: '0px',
      transition: 'all .3s ease-in-out',
      visibility: 'hidden',
      opacity: 0,
      top: '100%'
    },


    ExpandedSubRoutes: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      background: palette.primary.main,
      boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.2)',

      transition: 'top .4s ease-in-out',
      top: '-20px',
      width: '210px',
    },

    SubButton: {
      height: '37px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',

      [breakpoints.down( 'lg' )]: {
        paddingLeft: '3px',
      },
      [breakpoints.up( 'lg' )]: {
        paddingLeft: '20px',
      },
    },

    SubButtonLink: {
      color: colors.BLACK,
      margin: 'auto 0',
      padding: '5px',
      textDecoration: 'none',
      '&:hover': {
        background: colors.GRAY300,
      },
    },
    SubButtonLabel: {
      fontWeight: 300
    }

  }
}
