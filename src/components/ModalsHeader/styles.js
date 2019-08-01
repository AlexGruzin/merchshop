export default ({ colors, values }) => ({
  head: {
    height: '30px',
    display: 'flex',
    justifyContent: 'flex-end',
  },

  title: {
    lineHeight: '64px',
    margin: '0 auto',
    color: colors.GRAY800,
  },

  crossWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  crossIcon: {
    fontSize: values.EXTRA_SMALL_FONT_SIZE,
    padding: '9px',
  },

});
