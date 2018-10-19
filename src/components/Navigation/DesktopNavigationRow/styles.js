export default function({ colors, breakpoints, palette }) {
  return {

    navigationRow: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '50px',
      background: palette.primary.main,
    },

    navRowWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',

      height: '50px',
      margin: 'auto',

      [breakpoints.down( 'lg' )]: {
        width: '80%',
      },
      [breakpoints.up( 'lg' )]: {
        width: '65%',
      },
    },

    leftDroppedSubRoutes: {
      //right: '0px',

      [breakpoints.down( 'lg' )]: {
        right: '0px',
      },
      [breakpoints.up( 'lg' )]: {
        left: '0px',
      },
    },

    rightDroppedSubRoutes: {
      left: '0px',
    },
  }
}
