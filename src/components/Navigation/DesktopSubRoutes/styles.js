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
      minWidth: '160px',
      width: '170px',
      boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',

      transition: 'top .4s ease-in-out',
      top: '-20px',
    },


    SubButtonWrapper: {
      height: '37px',
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: '20px',
    },

    SubButton: {
      margin: 'auto 0',
      padding: '5px',
      textDecoration: 'none',
    },

  }
}
