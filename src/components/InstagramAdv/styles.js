export default () => ({
  instagram: {
    display: 'flex',
    height: '254px',
    position: 'relative'
  },
  instagramImage: {
    width: '25%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
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
    fontSize: '15px',
    marginRight: '7px'
  },
});
