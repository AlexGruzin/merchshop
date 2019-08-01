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
      alignSelf: 'center',
      textAlign: 'center',
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
      textTransform: 'none',
    },

    signButton: {
      width: '100%',
      color: colors.BLACK,
      background: colors.WHITE,
      border: '1px solid',

      marginBottom: '10px',
    },

    logButton: {
      marginTop: '7px',
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
