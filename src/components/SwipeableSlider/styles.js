export default function({ colors, values, breakpoints, palette }) {
  return {
    sliderContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: 'calc(408px + 36px)',
      margin: 'auto',
      justifyContent: 'center',
    },

    enhancedSwipeableViews: {
      justifyContent: 'center',
      height: '408px',
      width: '100%',
    },

    item: {
      height: '408px',
      width: '100%',
      background: colors.ZEPLIN_GREY,
      color: colors.WHITE,
    },

    slideWrapper: {
      display: 'flex',
      justifyContent: 'center',
      height: '408px',
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

      [breakpoints.down( 'xs' )]: {
        backgroundSize: 'cover',
      },
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
      background: colors.ZEPLIN_GREY,
    },
    slide1: {
      background: colors.ZEPLIN_GREY,
    },
    slide2: {
      background: colors.ZEPLIN_GREY,
    },
    slide3: {
      background: colors.ZEPLIN_GREY,
    },

    sliderButtonLink: {},

    buttonIcon: {
      fontSize: '10px',
    },

    sliderLabel: {
      marginRight: 'auto',
    },

    sliderButton: {
      position: 'absolute',
      bottom: '33px',
      height: '40px',
      width: '180px',
    },

    arrowSliderIcon: {},

    // ---- Indicator ----

    sliderIndicatorContainer: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '36px',
    },

    sliderIndicatorWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '150px',
      height: '36px',
    },

    sliderIndicatorButton: {
      display: 'flex',
      height: '100%',
      userSelect: 'none',
      cursor: 'pointer',
    },

    indicator: {
      transition: 'all 0.5s ease',
      display: 'flex',
      width: '17px',
      height: '2px',
      margin: 'auto 3px',
    },

    'activated': {
      backgroundColor: colors.BLACK,
    },

    'disactivated': {
      backgroundColor: colors.GRAY_ACTIVE,
    },

  }
}
