export default function({ breakpoints, palette, colors, values }) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',

      [breakpoints.up( 'sm' )]: {
        margin: '0 9%',
      },
      [breakpoints.down( 'sm' )]: {
        margin: '0 3%',
      },
    },

    bigDescription: {
      alignSelf: 'center',
      textAlign: 'center',
      marginBottom: '25px',

      whiteSpace: 'pre-line',
    },

    heading: {
      marginBottom: '5px',
    },

    formControl: {
      display: 'flex',
      width: '100%',
      marginBottom: '3px',
    },

    submitButton: {
      marginTop: '15px',
      marginBottom: '5px',
    },

    bottomLink: {
      margin: '20px auto',
      color: colors.BLACK,
    },

  }
}
