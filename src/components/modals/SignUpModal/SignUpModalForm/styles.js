export default function({ breakpoints, palette, colors, values }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '94%',
      margin: '0 3%',
    },

    bigDescription: {
      fontFamily: 'HelveticaNeue-Light',
      fontSize: '20px',
      fontWeight: '300',
      letterSpacing: '0.8px',
      alignSelf: 'center',
      textAlign: 'center',

      width: '257px',
      marginBottom: '25px',

      whiteSpace: 'pre-line',
    },

    heading: {
      marginBottom: '5px',
    },

    formControl: {
      display: 'flex',
      width: '100%',
      marginBottom: '12px',
    },

    input: {
      border: `1px solid ${colors.GREY400}`,
      borderRadius: '3px',
      height: '40px',
    },

    submitButton: {
      width: '100%',
      height: '40px',
      background: colors.BLACK,
      color: colors.WHITE,
      marginTop: '15px',
      marginBottom: '5px',

      '& $root $disabled': {
        color: colors.WHITE,
      }
    },

    bottomLink: {
      margin: '20px auto',
    },

    link: {
      fontFamily: 'HelveticaNeue-Medium',
      color: colors.BLACK,
      fontSize: '12px',
    }
  }
}
