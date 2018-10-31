export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },



    // -- Items

    itemsColumn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '96%',
      margin: '0 2%',
      marginBottom: '15px',
    },

    removeColumn: {
      display: 'flex',
      width: '50%',
      flexDirection: 'column',
    },

    totalWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '96%',
      padding: '10px 2%',
      background: colors.GRAY200,
    },

    row: {
      display: 'flex',
      flexDirection: 'row',
      margin: '0 15px',
      marginTop: '15px',
    },

    cost: {
      marginRight: '3px',
    },

    totalLabel: {
      fontFamily: 'HelveticaNeue-Medium',
      fontSize: '16px',
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      margin: '0 15px',
      marginTop: '30px',
    },

    totalSum: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: '30px',
      margin: '0 15px',
      marginTop: '10px',
      fontWeight: '100',
    },

    applyWrapper: {
      display: 'flex',
      flexDirection: 'row',
      border: '1px solid',
      height: '40px',
      margin: '0 15px',
      marginTop: '30px',
    },

    applyInput: {
      display: 'flex',
      flexGrow: '4',
      background: colors.WHITE,
      padding: '0 10px',
    },

    applyButton: {
      display: 'flex',
      flexGrow: '1',
      borderLeft: '1px solid',
    },

    checkoutButton: {
      display: 'flex',
      flexGrow: '1',
      height: '40px',
      background: colors.BLACK,
      color: colors.WHITE,
      margin: '0 15px',
      marginTop: '15px',
    },
  }
}
