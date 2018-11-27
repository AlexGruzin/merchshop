export default function({ colors, breakpoints, palette, values }) {
  return {

    root: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
    },

    title: {
      alignSelf: 'center',
    },

    rating: {
      marginTop: '20px',
    },

    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },

    amount: {
      width: '30px',
      margin: '0 20px 0 10px',
    },

    starLabel: {
      marginTop: '15px',
    },

    askLabel: {
      margin: '10px 0',
      marginRight: '20px',
    },

    totalLabel: {
      color: colors.GRAY400,
    },

    buttonLabel: {
      color: colors.WHITE,
      fontSize: values.SMALL_FONT_SIZE,
    },

    rateButton: {
      display: 'flex',
      width: '47%',
      height: '30px',
      background: colors.BLACK,
      marginRight: '20px',
    },

  }
}
