export default ({ colors, values }) => ({
  login: {
    width: '500px',
    backgroundColor: colors.WHITE,
    minHeight: '250px',
    justifyContent: 'space-between',
    margin: 'auto',
    padding: '30px',
    boxSizing: 'border-box',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '4px',
    fontFamily: values.PRIMARY_FONT,
    boxShadow: `0 10px 40px 0 ${colors.AUTHENTICATE_BOX_SHADOW}, 0 2px 9px 0 ${colors.AUTHENTICATE_BOX_SHADOW_FADED}`,
  },
  passwordRow: {

  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: '20px',
    textDecoration: 'underline',
    fontSize: '12px',
    fontFamily: values.PRIMARY_FONT,
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
    fontFamily: values.PRIMARY_FONT,
  },
  heading: {
    fontSize: '14px',
    fontFamily: values.PRIMARY_FONT,
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: colors.RED,
    maxWidth: '150px',
    borderRadius: '4px',
    color: colors.WHITE,
    fontSize: '15px',
    fontFamily: values.PRIMARY_FONT,
  },
});