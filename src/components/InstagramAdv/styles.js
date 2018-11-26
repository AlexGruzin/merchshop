export default ({ breakpoints, values }) => ({
  instagram: {
    display: 'flex',
    height: '254px',
    position: 'relative',

    [breakpoints.down( 'xs' )]: {
      flexWrap: 'wrap',
      height: '324px',
    },
  },
  instagramImage: {
    width: '25%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    [breakpoints.down( 'xs' )]: {
      width: '50%',
      height: '50%',
    },
  },
  instagramButton: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    padding: '13px 37px 12px 40px',
    transform: 'translate3d(-50%, -50%, 0)'
  },
  instagramButtonLabel: {
    textTransform: 'lowercase',
  },

  instagramIcon: {
    fontSize: values.LARGE_GIANT_FONT_SIZE,
    marginRight: '7px',
  },
});
