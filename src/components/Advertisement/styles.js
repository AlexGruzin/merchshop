export default ({ palette, colors }) => ({
  rootAdvert: {
    display: 'flex',
    width: '100%',
    height: '35px',
  },

  advertismentRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '35px',
    backgroundColor: palette.primary.dark,
  },

  phraze: {
    marginLeft: '10px',
  },

  advertIconWrapper: {
    height: '35px',
    width: '35px',
    lineHeight: '35px',
    justifySelf: 'flex-end',
    backgroundColor: palette.primary.dark,
    padding: '0 1%',
    color: palette.secondary.main,
  },

  advertIcon: {
    fontSize: '10px',
  },
});
