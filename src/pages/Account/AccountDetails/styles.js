export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',

      minHeight: 'calc(100% - 70px)',
    },

    field: {
      marginBottom: '3px',
    },

    input: {
      border: `1px solid ${colors.GRAY400}`,
      borderRadius: '3px',
      height: '40px',

      fontFamily: 'Avenir',
      fontSize: '14px',
      letterSpacing: '0.5px',
    },

    detailsRoot: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      margin: '0 17px',
    },

    title: {
      marginTop: '20px',
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

  }
}
