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
    justifySelf: 'flex-end',
    backgroundColor: palette.primary.dark,
    paddingRight: '2%',
    fontSize: '14px',
    color: colors.BLACK,
  },

  advertIcon: {
    position: 'relative',
    height: '35px',
    padding: 0,
  },
});
