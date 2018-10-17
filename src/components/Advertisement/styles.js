export default ({ palette, colors, breakpoints, values }) => ({

  phraze: {
    marginLeft: '10px',
  },

  promo: {
    color: colors.CORAL,
  },

  advertIcon: {
    display: 'flex',
    fontSize: values.SMALL_FONT_SIZE,
    height: '100%',
    alignItems: 'center',
  },

  // scaled styles
  advertismentRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    [breakpoints.down( 'sm' )]: {
      margin: '0 2%',
    },
    [breakpoints.up( 'sm' )]: {
      margin: '0',
    },
  },

  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.primary.dark,

    [breakpoints.down( 'sm' )]: {
      height: '50px',
    },
    [breakpoints.up( 'sm' )]: {
      height: '35px',
    },
  },

  advertismentWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',

    [breakpoints.down( 'sm' )]: {
      flexDirection: 'column',
    },
    [breakpoints.up( 'sm' )]: {
      flexDirection: 'row',
    },
  },

  advertIconWrapper: {
    height: '100%',
    width: '35px',
    lineHeight: '35px',
    justifySelf: 'flex-end',
    backgroundColor: palette.primary.dark,
    padding: '0 1%',
    color: palette.secondary.main,
  },

});
