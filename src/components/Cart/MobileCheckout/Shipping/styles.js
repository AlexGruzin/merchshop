export default function({ colors, values, breakpoints, palette }) {
  return {
    shippingRoot: {
      display: 'flex',
      flexDirection: 'column',
      width: '94%',
      margin: '15px 3%',
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

    headingCheckBox: {
      fontSize: '14px',
      lineHeight: '24px',
    },

    formControl: {
      display: 'flex',
      width: '100%',
      marginBottom: '12px',
    },

    formControlCheckBox: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },

    giftIcon: {
      fontSize: '18px',
      marginRight: '5px',
    },

    formControlRadio: {
      display: 'flex',
      width: '100%',
    },

    radio: {
      padding: 0,
    },

    radioField: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      //height: '50px',
    },

    headingRadio: {
      fontSize: '14px',
      lineHeight: '30px',
      marginRight: '10px',
      marginLeft: '3px',
    },

    input: {
      border: `1px solid ${colors.GRAY400}`,
      borderRadius: '2px',
      height: '40px',
    },

    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      fontSize: '25px',
      marginTop: '10px',
    },

    submitButton: {
      width: '100%',
      height: '40px',
      background: colors.BLACK,
      color: colors.WHITE,
      marginTop: '30px',
      marginBottom: '5px',

      '& $root $disabled': {
        color: colors.WHITE,
      }
    },

  }
}
