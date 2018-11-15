export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {
      display: 'flex',

      [breakpoints.down( 'xs' )]: {
        flexDirection: 'column',
        minHeight: 'calc(100% - 70px)',
      },

    },

    listContainer: {
      display: 'flex',
      flexDirection: 'column',

      [breakpoints.up( 'sm' )]: {
        flexDirection: 'column',
        width: '40%',
        margin: '20px 50px'
      },
    },

    detailsRoot: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 17px',
    },

    title: {
      marginTop: '15px',
      marginBottom: '15px',

      fontSize: '16px',
      fontFamily: 'HelveticaNeue-Medium',
      fontWeight: '500',
      letterSpacing: '0.6px',
    },

    heading: {
      marginBottom: '5px',
    },

    addCardButton: {
      display: 'flex',
      flexGrow: '1',
      maxHeight: '40px',
      background: colors.BLACK,
      color: colors.WHITE,
      margin: '25px 17px',
    },

    savedButton: {
      display: 'flex',
      flexGrow: '1',
      maxHeight: '40px',
      border: `1px solid ${colors.BLACK}`,
      margin: '25px 17px',
    },

    savedIcon: {
      margin: '0 5px',
      fontSize: '18px',
    },

  }
}
