export default ({ colors }) => ({

  rootWrapper: {
    minHeight: '53px',
    maxHeight: '53px',
  },

  root: {
    border: `1px solid ${colors.GRAY400}`,
    borderRadius: '3px',
  },

  errorClass: {
    borderColor: colors.CORAL,
  },
});
