export default ({ breakpoints }) => ({
  mediumPhotoArea: {
    display: 'flex',
    width: '100%',

    [breakpoints.down( 'xs' )]: {
      flexDirection: 'column',
    },
  },
});
