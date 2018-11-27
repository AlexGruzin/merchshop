export default ({ colors, palette, breakpoints, spacing, values }) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectedTab: {

  },

  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: 'calc(100% - 300px)', //Footer + Header
  },

  tabWrapper: {

    [breakpoints.down( 'md' )]: {
      width: '100%',
    },
    [breakpoints.up( 'md' )]: {
      width: '60%',
      maxWidth: '600px',
    },
    [breakpoints.up( 'lg' )]: {
      width: '50%',
      maxWidth: '600px',
    },
  },

  swipeableViews: {
    backgroundColor: palette.primary.main,
  },

  rootTabs: {

  },

  tab: {
  },
});
