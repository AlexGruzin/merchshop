export default function({ colors, values, breakpoints, palette }) {
  return {
    shippingRoot: {
      display: 'flex',
      flexDirection: 'column',
      width: '94%',
      margin: '15px 3%',
    },

    title: {
      textTransform: 'uppercase',

      marginTop: '25px',
      marginBottom: '15px',
    },

    heading: {
      marginBottom: '5px',
    },

    headingCheckBox: {
      fontSize: values.LARGE_FONT_SIZE,
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
      fontSize: values.GIANT_FONT_SIZE,
      marginRight: '5px',
    },

    question: {
      fontSize: '1rem',
      alignSelf: 'center',
    },

    formControlRadio: {
      display: 'flex',
      width: '100%',
    },

    radio: {
      padding: 0,
    },

    radioIcon: {
      fontSize: '18px',
    },

    radioField: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '5px',
      width: '100%',
    },

    headingRadio: {
      marginRight: '10px',
      marginLeft: '3px',
    },

    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '25px',
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
