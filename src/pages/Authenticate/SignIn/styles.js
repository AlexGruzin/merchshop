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
    fontSize: '12px',
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
    fontSize: values.MEDIUM_LARGE_FONT_SIZE,
    fontWeight: '600',
  },
  submitButton: {
    display: 'flex',
    height: '50px',

    [breakpoints.down( 'md' )]: {
      width: '100%',
    },
    [breakpoints.up( 'md' )]: {
      width: '300px',
    },

  },
});
