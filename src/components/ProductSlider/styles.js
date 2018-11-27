export default function({ colors, values, breakpoints, palette }) {
  return {
    sliderContainer: {
      position: 'relative',

      display: 'flex',
      height: '325px',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'center',
    },

    enhancedSwipeableViews: {
      width: '100%',
    },

    // -------------- Controls --------------

    item: {
      width: '100%',
      color: colors.WHITE,
    },

    slideWrapper: {
      display: 'flex',
      justifyContent: 'center',
      height: '325px',
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
    },

    SliderImage: {
      margin: '0 auto',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    },

    'level-1': {
      left: '-100%',
    },
    'level0': {
      left: '0px',
    },
    'level1': {
      left: '100%',
    },

    // ---- background of image on slider each per image ----
    slide0: {
      //background: colors.ZEPLIN_GREY,
    },
    slide1: {
      //background: colors.ZEPLIN_GREY,
    },
    slide2: {
      //background: colors.ZEPLIN_GREY,
    },
    slide3: {
      //background: colors.ZEPLIN_GREY,
    },

    sliderButtonLink: {},

    sliderLabel: {
      marginRight: '46px',
    },

    sliderButton: {
      position: 'absolute',
      bottom: '33px',
      padding: '8px 12px 8px 14px'
    },

    leftArrow: {
      display: 'flex',
      left: 0,
      position: 'absolute',
      //marginLeft: '20px',
    },

    rightArrow: {
      display: 'flex',
      right: 0,
      position: 'absolute',
      //marginRight: '20px',
    },

    controlIcon: {
      fontSize: '12px',
      padding: '10px'
    },

    // ----------------------- Indicator ---------------------

    sliderIndicatorContainer: {
      display: 'flex',
      position: 'absolute',
      bottom: 0,

      alignItems: 'center',
      alignSelf: 'center',
      width: '16vw',
      margin: '0 auto',
      height: '40px',
    },

    sliderIndicatorButton: {
      display: 'flex',
      height: '100%',
      flexGrow: 1,
      userSelect: 'none',
      cursor: 'pointer',
    },

    indicator: {
      transition: 'all 0.5s ease',
      borderRadius: '50%',
      borderColor: colors.GRAY400,
      border: '1px solid',

      display: 'flex',
      height: '6px',
      width: '6px',
      margin: 'auto auto',
    },

    'activated': {
      backgroundColor: colors.GRAY400,
    },

    'disactivated': {
      backgroundColor: 'transparent',
    },

    like: {
      fontSize: '23px',
      position: 'absolute',
      top: 0,
      marginTop: '2vw',
      marginLeft: '2vw',
    },

    likeEnabled: {
      color: colors.CORAL,
    },

    likeDisabled: {
      color: colors.GRAY400,
    },

    zoomer: {
      fontSize: '20px',
      position: 'absolute',
      right: 0,
      bottom: 0,
    },

    zoomIcon: {
      fontSize: '30px',
      marginBottom: '3vw',
      marginRight: '3vw',
    },


  }
}
