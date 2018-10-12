export default ({ colors, values }) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 28px 20px 28px',
    alignItems: 'center',
  },
  heading: {
    fontSize: '14px',
    fontWeight: '600',
    justifyContent: 'center',
  },
  formControl: {
    width: '55%',
    margin: '20px 0',
  },
  submitButton: {
    maxWidth: '150px',
    borderRadius: '4px',
    color: colors.WHITE,
    fontSize: '15px',
  },
});
