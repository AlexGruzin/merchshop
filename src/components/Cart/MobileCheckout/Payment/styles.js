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
      border: `1px solid ${colors.GREY400}`,
      color: colors.GREY400,
      fontSize: '18px',

      marginBottom: '7px',
    },

    enabled: {
      border: `1px solid ${colors.BLACK}`,
      color: colors.BLACK,
    },

    chooseLabel: {
      fontSize: '12px',
      fontFamily: 'Avenir-Heavy',
      fontWeight: 900,
      lineHeight: '1.5',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
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
      width: '10%',
      justifyContent: 'center',
      alignItems: 'center',
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

    row: {
      display: 'flex',
      justifyContent: 'space-between',
    },

    input: {
      border: `1px solid ${colors.GREY400}`,
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
