export default ({ colors, spacing, values }) => ({
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
    fontSize: '14px',
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: colors.RED,
    maxWidth: '150px',
    borderRadius: '4px',
    color: colors.WHITE,
    fontSize: '15px',
  },
});
