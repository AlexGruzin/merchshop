export default ({ colors, spacing, breakpoints, values }) => ({
  login: {
    minHeight: '250px',
    justifyContent: 'space-between',
    margin: '8px',
    padding: spacing.unit,
    boxSizing: 'border-box',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  passwordRow: {

  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: '20px',
    textDecoration: 'underline',
    fontSize: values.MEDIUM_FONT_SIZE,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  formControl: {
    width: '100%',
    margin: '20px 0',
  },
  input: {
    width: '100%',
  },
  heading: {
  },
  submitButton: {
    display: 'flex',
    height: '50px',
    border: 'solid 1px black',

    [breakpoints.down( 'md' )]: {
      width: '100%',
    },
    [breakpoints.up( 'md' )]: {
      width: '300px',
    },
    [breakpoints.up( 'lg' )]: {
      width: '500px',
    },

  },
});
