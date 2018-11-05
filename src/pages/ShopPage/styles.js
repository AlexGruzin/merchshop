export default ( colors, palette ) => ({
  // -- descktop
  root: {
    display: 'flex',
    flexDirection: 'column',
  },

  filterPart: {
    display: 'flex',
    width: '25%',
  },

  shopContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  // ---mobile

  mobileShopContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  mobileFilterPart: {
    display: 'flex',
    width: '100%',
    zIndex: '10',
  },

  mobileItemsPart: {
    display: 'flex',
    width: '100%',
  },

  mobilePaginationContainer: {
    display: 'flex',
    width: '96%',
    alignSelf: 'center',
    justifyContent: 'center',
  },

});
