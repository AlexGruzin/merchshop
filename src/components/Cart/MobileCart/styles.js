export default function({ colors, values, breakpoints, palette }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },

    // -- Items

    itemsColumn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '95%',
      margin: '0 auto',
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
      flexGrow: 1,
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
      marginLeft: '3px',
    },

    totalLabel: {
      textTransform: 'uppercase',
      margin: '0 15px',
      marginTop: '30px',
    },

    totalSum: {
      margin: '0 15px',
      marginTop: '10px',
    },

    applyWrapper: {
      display: 'flex',
      flexDirection: 'row',
      margin: '0 15px',
      marginTop: '30px',
    },

    applyInput: {
      display: 'flex',
      flexGrow: '4',
      background: colors.WHITE,
      border: `1px solid black`,
    },

    applyButton: {
      display: 'flex',
      flexGrow: '1',
    },

    checkoutButton: {
      display: 'flex',
      flexGrow: '1',
      margin: '0 15px',
      marginTop: '15px',
    },
  }
}
