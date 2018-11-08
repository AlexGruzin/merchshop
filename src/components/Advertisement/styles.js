export default ({ palette, colors, breakpoints, values }) => ({

  phraze: {
    marginLeft: '10px',
  },

  promo: {
    color: colors.CORAL,
  },

  advertIcon: {
    display: 'flex',
    fontSize: values.EXTRA_SMALL_FONT_SIZE,
    height: '35px',
    width: '35px',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: colors.GRAY300,

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
    display: 'flex',
    height: '100%',
    width: '35px',
    alignItems: 'center',
    lineHeight: '35px',
    justifySelf: 'flex-end',
    padding: '0 5px',
    color: colors.BLACK,
  },

});
