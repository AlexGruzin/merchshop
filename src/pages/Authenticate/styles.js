export default ({ colors, palette, breakpoints, spacing, values }) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectedTab: {

  },
  tabWrapperScaled: {
    backgroundColor: colors.RED600,

    [breakpoints.down( 'md' )]: {
      width: '100%',
    },
    [breakpoints.up( 'md' )]: {
      width: '70%',
    },
  },

  tabs: {},
  swipeableViews: {
    backgroundColor: colors.GREY300,
  },
  tab: {
  },
});
