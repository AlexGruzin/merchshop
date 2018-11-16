export default function({ breakpoints, palette, colors, values }) {
  return {

    rootLogRequest: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0 17px',
      paddingBottom: '25px',
      alignItems: 'center',
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

    label: {
      color: colors.WHITE,
      marginLeft: '5px',
    },

    buttonWrapper: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
    },

    orBlock: {
      margin: '20px 0',
    },

    signButton: {
      width: '100%',
      color: colors.BLACK,
      background: colors.WHITE,
      border: '1px solid',

      marginBottom: '10px',
    },

    logButton: {
      width: '100%',
      color: colors.WHITE,
      background: colors.BLACK,
    },

    facebookButton: {
      width: '100%',
      color: colors.WHITE,
      background: colors.FACEBOOK,
      marginBottom: '10px',
    },

    googleButton: {
      width: '100%',
      color: colors.WHITE,
      background: colors.GOOGLE,
    },
  }
}
