export default function({ colors, values, breakpoints, palette }) {
  return {

    slidesContainer: {
      height: '408px',
      width: '100%',
      position: 'relative',
    },

    item: {
      height: '408px',
      position: 'absolute',
      width: '100%',
      float: 'left',
      background: '#CCC',
      transition: 'all 1s',
      color: '#FFFFFF',
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
      background: '#81898c',
    },
    slide1: {
      background: '#81898c',
    },
    slide2: {
      background: '#81898c',
    },
    slide3: {
      background: '#81898c',
    },

    sliderButtonLink: {
      //color: colors.BLACK,
    },

    sliderLabel: {
      marginRight: '46px',
    },

    sliderButton: {
      position: 'absolute',
      bottom: '33px',
      padding: '8px 12px 8px 14px'
    },

    arrowSliderIcon: {},

    // ---- Indicator ----

    sliderIndicatorContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '408px', // slider height
      width: '100%',
      height: '50px',
    },

    sliderIndicatorWrapper: {
      display: 'flex',
      alignItems: 'center',
      width: '150px',
      height: '50px',
    },

    indicator: {
      transition: 'all 0.5s ease',
      display: 'flex',
      flexGrow: 1,
      margin: '0 5px',
      height: '2px',
    },

    activated: {
      backgroundColor: colors.BLACK,
    },

    disactivated: {
      backgroundColor: colors.GREY400,
    },

    sliderContainer: {
      display: 'flex',
      overflow: 'hidden',
      width: '100%',
      height: '458px',
      margin: 'auto',
      justifyContent: 'center',
    },
  }
}
