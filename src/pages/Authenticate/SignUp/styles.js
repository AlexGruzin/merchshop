export default ({ colors, spacing, values, breakpoints }) => ({
  signUp: {
    minHeight: '250px',
    justifyContent: 'space-between',
    margin: '8px',
    padding: spacing.unit,
    boxSizing: 'border-box',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
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
