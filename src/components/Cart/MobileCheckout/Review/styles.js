export default function({ colors, values, breakpoints, palette }) {
  return {
    reviewRoot: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      margin: '15px 0',
    },

    itemsColumn: {
      display: 'flex',
      flexDirection: 'column',
      width: '94%',
      margin: '0 3%',
    },

    bagTitle: {
      width: '92%',
      margin: '0 4%',
    },

    title: {
      marginTop: '25px',
      marginBottom: '15px',

      fontSize: '16px',
      fontFamily: 'HelveticaNeue-Medium',
      fontWeight: '500',
      letterSpacing: '0.6px',
    },

    heading: {
      marginBottom: '5px',
    },

    submitButton: {
      width: '100%',
      height: '40px',
      background: colors.BLACK,
      color: colors.WHITE,
      marginTop: '30px',
      marginBottom: '5px',
    },

    infoBlock: {
      display: 'flex',
      flexDirection: 'column',
      width: '92%',
      padding: '0 4%',
      margin: '10px 0',

      boxShadow: '0px 0px 4px 1px rgba(0, 0, 0, 0.2)',
    },

    totalBlock: {
      display: 'flex',
      flexDirection: 'column',
      width: '94%',
      background: colors.GRAY200,
      padding: '0 3%',
    },

    row: {
      display: 'flex',
      flexDirection: 'row',
      margin: '0 15px',
      marginTop: '15px',
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
  }
}
