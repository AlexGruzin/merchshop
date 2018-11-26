export default function({ colors, values, breakpoints, palette }) {
  return {
    shippingRoot: {
      display: 'flex',
      flexDirection: 'column',
      width: '94%',
      margin: '15px 3%',
    },

    chooseWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '40px',
      border: `1px solid ${colors.GRAY400}`,
      color: colors.GRAY400,
      fontSize: values.GIANT_FONT_SIZE,

      marginBottom: '7px',
    },

    enabled: {
      borderColor: colors.BLACK,
      color: colors.BLACK,
    },

    chooseLabel: {
      color: colors.GRAY400,
      textTransform: 'uppercase',
    },

    formControl: {
      display: 'flex',
      width: '100%',
      marginBottom: '12px',
    },
    formControlDate: {
      display: 'flex',
      width: '60%',
      marginRight: '5px',
    },
    formControlCCV: {
      display: 'flex',
      width: '20%',
    },

    formIcon: {
      display: 'flex',
      width: '15%',
      justifyContent: 'center',
      fontSize: '22px',
      alignSelf: 'flex-end',
      marginBottom: '17px',
    },

    title: {
      marginTop: '25px',
      marginBottom: '15px',
    },

    heading: {
      marginBottom: '5px',
    },

    row: {
      display: 'flex',
      justifyContent: 'space-between',
    },

    input: {
      border: `1px solid ${colors.GRAY400}`,
      borderRadius: '2px',
      height: '40px',
    },

    submitButton: {
      width: '100%',
      height: '40px',
      background: colors.BLACK,
      color: colors.WHITE,
      marginTop: '30px',
      marginBottom: '5px',
    },

    variantIcon: {
      fontSize: '20px',
      marginRight: '10px',
    },

    questionIcon: {
      fontSize: '28px',
      marginTop: '25px',
      marginRight: '10px',
    },
  }
}
